import { ipcRenderer } from "electron"
import path from "path"
import fs from "fs"

const imgs = [document.getElementById("achicon")] as HTMLImageElement[]

const hiddenelems = [
    "steamdeck",
    "epicgames",
    "ps5"
]

const notifyhelper = {
    appendcss: (preset: string) => {
        document.querySelector(`link#${preset}css`)! && document.querySelector(`link#${preset}css`)!.remove()
    
        const link = document.createElement("link")
        link.id = `${preset}css`
        link.rel = "stylesheet"
        link.href = path.join(__dirname,"presets",preset,"styles.css")
    
        return link
    },
    get appids(): number[] { return [
        361420,
        1091500,
        22300,
        285900,
        4000,
        1659040,
        613100,
        1149460,
        582010,
        620,
        1564220,
        257510,
        835960
    ]},
    get audioextensions(): string[] { return [
        ".wav",
        ".mp3",
        ".ogg",
        ".aac"
    ]},
    getgameart: (type: "icon" | "library_hero",appid: number,steampath: string,steam3id: number,hqicon: string): Promise<string> => {
        const heropath = (steam3id: number) => {
            const heroimgpath = path.join(steampath,"userdata",`${steam3id}`,"config","grid",`${appid}_hero`).replace(/\\/g,"/")
            const exts = ["jpg","png"]
    
            for (const ext of exts) {
                if (fs.existsSync(`${heroimgpath}.${ext}`)) return `${heroimgpath}.${ext}`
            }
    
            return null
        }

        const imgpath = type === "library_hero" && heropath(steam3id) || (type === "icon" && hqicon || path.join(steampath,"appcache","librarycache",`${appid}_${type}.jpg`)).replace(/\\/g,"/")
        return new Promise((resolve,reject) => fs.existsSync(imgpath) ? resolve(imgpath) : reject(type === "icon" ? "../img/gameicon.png" : (`../img/gameart/${appid}_${type}.jpg` || "../img/sanimgbg.png")))
    },
    getaudiofile: (mode: "file" | "folder",filepath: string) => {
        if (mode === "file") return filepath
    
        const sounddir = filepath as string || path.join(__dirname,"..","sound")
        const dirfiles = fs.readdirSync(sounddir)
        const valid: (string | null)[] = []
    
        for (const file of dirfiles) {
            const filepath = path.join(sounddir,file).replace(/\\/g,"/")
            notifyhelper.audioextensions.includes(path.extname(file)) && fs.statSync(filepath).size && valid.push(filepath)
        }
    
        !valid.length && valid.push(null)
    
        return valid[Math.floor(Math.random() * valid.length)]
    },
    playaudio: (customisation: Customisation, iswebview: "customiser" | "sspreview" | "ss" | null, skipaudio: boolean | undefined) => {
        if (iswebview || skipaudio) return
    
        const audio = document.querySelector("audio")!
        audio.src = notifyhelper.getaudiofile(customisation.soundmode,customisation[`sound${customisation.soundmode === "file" ? "file" : "dir"}`]) || "../sound/notify.wav"
        audio.volume = customisation.volume / 100
        audio.play()
    },
    convertICO: async (file: string,tempdir: string) => {
        if (path.extname(file) !== ".ico") return file

        // "gameicon.png" should always exist here, as it is written to "./temp" in `trackwin.ts`
        const iconpng = path.join(tempdir,"gameicon.png").replace(/\\/g,"/")
        if (fs.existsSync(iconpng)) return iconpng

        return null
    },
    checkimgload: (imgs: HTMLImageElement[]): boolean => {
        for (const img of imgs) {
            if (!img) return true
            if (!img.complete) return false
            console.log(`"${img.id}" loaded`)
        }
    
        return true
    },
    checkreadystate: (status: "ready" | "failed",obj: Info,imgs: HTMLImageElement[],res: Res): NodeJS.Timeout | void => {
        if (document.readyState !== "complete") return setTimeout(() => notifyhelper.checkreadystate(status,obj,imgs,res),250)
        if (!notifyhelper.checkimgload(imgs)) return setTimeout(() => notifyhelper.checkreadystate(status,obj,imgs,res),250)

        const { customisation, iswebview, skipaudio } = obj
        if (iswebview === "customiser" || iswebview === "sspreview") return
        
        ipcRenderer.send(`notify${status}`,res)
        status === "ready" && ipcRenderer.sendToHost("sscapture")
    
        return notifyhelper.playaudio(customisation,iswebview,skipaudio)
    },
    setcustomisations: (customisation: Customisation,percent: { value: number, rarity: number },iswebview: "customiser" | "sspreview" | "ss" | null,appid: number,steampath: string,steam3id: number,hqicon: string,temp: string): Promise<HTMLImageElement[] | null> => {
        return new Promise<HTMLImageElement[] | null>(async (resolve,reject) => {
            const gameartappid = !appid ? notifyhelper.appids[Math.floor(Math.random() * notifyhelper.appids.length)] : appid
    
            const fontloader = document.getElementById("fontloader")
            fontloader && fontloader.remove()
            
            if (customisation.customfont) {   
                const style = document.createElement("style")
                style.id = "fontloader"
                style.textContent = `@font-face {\n\tfont-family: "customfont";\n\tsrc: url("${customisation.customfont}");\n\t}\n\n.wrapper#achcont > .wrapper#achcontent {\n\tfont-family: "customfont" !important;\n\t}`
                document.head.appendChild(style)
            }

            const getpercent = (trophies?: { bronze: string | number, silver: string | number, gold: string | number }): string | number => {
                if (!trophies) return 100 - Math.round(percent.value / 5) * 5
                return percent.value >= 50 ? trophies.bronze : (percent.value < 50 && percent.value > percent.rarity ? trophies.silver : trophies.gold)
            }

            const getcustomicon = (type: "logo" | "decoration"): string => {
                const preseticons = customisation.customicons[customisation.preset] as CustomIcon
                if (preseticons.decoration && customisation.replacelogo) type = "decoration"

                const icon = preseticons[type]
                if (!icon) return ""

                if (Array.isArray(icon)) return `url('${getpercent({ bronze: icon[0],silver: icon[1],gold: icon[2] })}')`

                return `url('${icon}')`
            }
        
            iswebview === "customiser" && (customisation.scale = 100)
    
            const preloadimgs: HTMLImageElement[] = []
            const imgerrors: string[] = []
    
            const getpreloadimgurl = async (type: "bgstyle" | "usegameicon") => {
                const preloadimg = document.createElement("img")
                const url = customisation.bgstyle === "bgimg" ? (customisation.bgimg || "../img/sanimgbg.png") : await notifyhelper.getgameart(type === "bgstyle" ? "library_hero" : "icon",gameartappid,steampath,steam3id,hqicon).catch(fallback => {
                    imgerrors.push(type)
                    return fallback as string
                })
                
                const convertedicon = await notifyhelper.convertICO(url,temp) || await notifyhelper.getgameart(type === "bgstyle" ? "library_hero" : "icon",gameartappid,steampath,steam3id,"")
                preloadimg.id = `${type}url`
                preloadimg.src = convertedicon
    
                preloadimgs.push(preloadimg)
    
                return convertedicon
            }
     
            const gamearturl: string | null = (customisation.bgstyle === "gameart" || customisation.bgstyle === "bgimg") ? await getpreloadimgurl("bgstyle") : null
            const gameiconurl: string | null = customisation.usegameicon ? (appid ? await getpreloadimgurl("usegameicon") : "../img/gameicon.png") : null
    
            gameiconurl && ((document.getElementById("achicon")! as HTMLImageElement)!.src = gameiconurl)

            const properties = new Map<string,string>([
                ["--displaytime",`${customisation.displaytime}s`],
                ["--scale",`${customisation.scale / 100}`],
                ["--gradientangle",`${customisation.gradientangle}deg`],
                ["--bgimg",`url('${gamearturl}')`],
                ["--bgimgbrightness",`${customisation.bgimgbrightness}%`],
                ["--brightness",`${customisation.brightness}%`],
                ["--roundness",`${(customisation.roundness / 4) * (customisation.scale / 100)}px`],
                ["--fontsize", `${customisation.fontsize / 100}`],
                ["--opacity", `${customisation.opacity / 100}`],
                ["--iconroundness",customisation.iconroundness === 100 ? "50%" : `${(customisation.iconroundness / 6) * (customisation.scale / 100)}px`],
                ["--fontoutline",customisation.fontoutline ? `0 0 ${customisation.scale / 100}px ${customisation.fontoutlinecolor},`.repeat(9).replace(/,$/, "") : "none"],
                ["--fontshadow",customisation.fontshadow ? `drop-shadow(0 0 ${1.5 * customisation.scale / 100}px ${customisation.fontshadowcolor}) `.repeat(3) : "none"],
                ["--logo",getcustomicon("logo")],
                ["--decoration",getcustomicon("decoration")],
                ["--gs",customisation.usepercent ? `${percent.value.toFixed(1)}` : `${getpercent()}`],
                ["--unit",customisation.usepercent ? "%" : (customisation.preset === "epicgames" ? " XP" : (customisation.preset === "xbox360" ? "G" : ""))],
                ["--raritycolor",`${percent.value >= 50 ? "#a05526" : (percent.value < 50 && percent.value > percent.rarity ? "#828282" : "#b4904a")}`],
                ["--hiddenicon",`url('${customisation.hiddenicon || "../icon/lock.svg"}')`],
                ["--glow",customisation.glow ? `drop-shadow(${(customisation.glowx * (customisation.scale / 100)) / 10}px ${(customisation.glowy * (customisation.scale / 100)) / 10}px var(--glowsize) var(--glowcolor))` : "none"],
                ["--glowsize",`${(customisation.glowsize / 100) * 0.6}rem`],
                ["--glowcolor",customisation.glowcolor + (Math.round(((customisation.glowopacity - 1) * 253) / 99) + 1).toString(16).padStart(2,"0")],
                ["--glowanim",customisation.glow && customisation.glowanim !== "off" ? `${customisation.glowanim} calc(var(--transition) * var(--glowspeed)) linear infinite` : "none"],
                ["--glowspeed",`${customisation.glowspeed}`],
                ["--blur",`${customisation.blur * (iswebview === "customiser" ? 1 : customisation.scale / 100) / 50}px`],
                ["--mask",customisation.mask ? `url('${customisation.maskimg}') center / cover no-repeat` : "none"]
            ])

            const gselem = document.getElementById("xpwrapper") || ((customisation.preset === "xboxone" || customisation.preset === "xbox360") ? document.getElementById("title") : null)
            if (gselem) {
                gselem.setAttribute("gs",properties.get("--gs")!)
                gselem.setAttribute("unit",properties.get("--unit")!)
            }

            const colors = [
                "primarycolor",
                "secondarycolor",
                "tertiarycolor",
                "fontcolor"
            ]

            colors.forEach(color => properties.set(`--${color}`,(customisation as any)[color]))

            const attrs = [
                "bgstyle",
                "bgonly",
                // "alldetails",
                iswebview === "sspreview" || iswebview === "ss" ? "ovpos" : "pos"
            ]
    
            attrs.forEach(attr => (customisation as any)[attr] && document.body.setAttribute(typeof (customisation as any)[attr] === "boolean" ? attr : (customisation as any)[attr],""))

            properties.forEach((value,key) => document.documentElement.style.setProperty(key,value))
    
            document.documentElement.style.setProperty("--bodyopacity","1")
    
            if (!imgerrors.length) return resolve(preloadimgs)
    
            const errobj = {
                validimgs: preloadimgs.filter(img => imgerrors.includes(img.id)),
                msg: `${imgerrors.map(id => id === "bgstyle" ? "Game Art" : "Game Icon").join(" and ")} image not found for ${appid}`
            }
    
            return reject(errobj)
        })
    }
}

ipcRenderer.on("notify", async (event,obj: Info) => {
    const { info: { type, appid, steam3id, apiname, unlockmsg, title, desc, icon, percent, hidden }, customisation, iswebview, steampath, hqicon, temp, ssalldetails } = obj

    try {
        document.body.setAttribute(type,"")
        !customisation.iconanim && document.body.setAttribute("noiconanim","")
        // document.body.toggleAttribute("alldetails",customisation.alldetails)
        document.body.toggleAttribute("nodecoration",!customisation.showdecoration)

        const fastanimmap = new Map<string,number>([
            ["xqjan",8],
            ["xboxone",8]
        ])

        fastanimmap.forEach((value,key) => {
            if (customisation.preset !== key) return
            document.body.toggleAttribute("fastanim",customisation.displaytime < value)
        })
        
        const inserthtml = await new Promise<string>((resolve,reject) => {
            try {
                resolve(fs.readFileSync(path.join(__dirname,"presets",customisation.preset,"index.html")).toString())
            } catch (err) {
                reject(`Error inserting HTML for "${customisation.preset}" preset: ${err}`)
            }
        })
        .catch(err => { throw new Error(err) })

        document.body.insertAdjacentHTML("beforeend",inserthtml)
        const meta = document.querySelector("body > meta")
        if (!meta) throw new Error(`Error inserting HTML for "${customisation.preset}" preset: No <meta> tag found in body`)

        const dims = {
            width: parseInt(meta.getAttribute("width") as string),
            height: parseInt(meta.getAttribute("height") as string),
            offset: meta.getAttribute("offset") !== null ? parseInt(meta.getAttribute("offset") as string) : 20
        }
        
        document.documentElement.style.setProperty("--notifywidth",`${dims.width * (iswebview !== "customiser" ? customisation.scale / 100 : 1)}px`)
        document.documentElement.style.setProperty("--notifyheight",`${dims.height * (iswebview !== "customiser" ? customisation.scale / 100 : 1)}px`)

        iswebview !== "customiser" && ipcRenderer.send("dims",dims)

        const res = await new Promise<Res>(resolve => {
            document.head.appendChild(notifyhelper.appendcss(customisation.preset))

            const achicons = document.querySelectorAll("#achicon")!
            achicons.forEach(achicon => (achicon as HTMLImageElement)!.src = icon)

            const percentstr = `${(type === "main" && percent.showpercent === "all" || type === "rare" && percent.showpercent !== "off") ? ` (${Math.max(parseFloat(percent.value.toFixed(1)),0.1)}%)` : ""}`

            const str = {
                unlockmsg: unlockmsg,
                title: title,
                desc: desc
            }

            const ss = iswebview && iswebview.includes("ss") ? "ss" : ""
            const elemtype = `${ss}elems`
            const elems = customisation[elemtype] as ("unlockmsg" | "title" | "desc")[]
            const ssnodetails = elemtype === "sselems" && !(ssalldetails as string[]).includes(customisation.preset)

            if (elems) {
                const filter = elems.filter(elem => elem !== null)
                document.body.toggleAttribute("alldetails",filter.length === 3)

                const offset = hiddenelems.includes(customisation.preset) && !document.body.hasAttribute("alldetails") ? 1 : 0

                const addelem = (type: "percent" | "hiddenicon" | "decoration",pos: number) => {
                    const ss = elemtype === "sselems" ? "ss" : ""
                    if (!customisation[`${ss}${type}pos`] || customisation[`${ss}${type}pos`] !== pos) return ""
                    
                    switch (type) {
                        case "percent": return ` ${percentstr}`
                        case "hiddenicon": return customisation.showhiddenicon && hidden ? `<span id="hiddenicon"></span>` : ""
                        // !!! Prevent "decoration" element from being shown if `decoration: null` for preset in `sanconfig.defaulticons`
                        case "decoration": return `<span id="decoration"></span>`
                        default: ""
                    }
                }

                // !!! Fix issue where `span` elements returned from `addelem()` are still shown when element contains no text content
                document.getElementById("unlockmsg")!.innerHTML = `${addelem("decoration",1)}${addelem("hiddenicon",1)}${(ssnodetails ? "" : str[filter[0]] || "")}${addelem("percent",1)}`
                document.getElementById("title")!.innerHTML = `${addelem("decoration",2 - offset)}${addelem("hiddenicon",2 - offset)}${str[filter[ssnodetails ? 0 : 1 - offset]] || ""}${addelem("percent",2 - offset)}`
                document.getElementById("desc")!.innerHTML = `${addelem("decoration",3 - offset)}${addelem("hiddenicon",3 - offset)}${str[filter[ssnodetails ? 1 : 2 - offset]] || ""}${addelem("percent",3 - offset)}`
            }

            // document.getElementById("unlockmsg")!.textContent = `${unlockmsg}${customisation.alldetails && customisation.preset === "epicgames" ? "" : percentstr}`
            // document.getElementById("title")![customisation.showhiddenicon && hidden ? "innerHTML" : "textContent"] = `${customisation.showhiddenicon && hidden ? `<span id="hiddenicon"></span>` : ""}${title}${document.body.hasAttribute("ss") && !customisation.alldetails && customisation.preset !== "windows" ? percentstr : ""}`
            // document.getElementById("desc")!.textContent = desc

            // document.querySelectorAll(`#unlockmsg, #title, #desc`).forEach(elem => !customisation.elems!.includes(elem.id as "unlockmsg" | "title" | "desc") && ((elem as HTMLElement).style.display = "none"))
            
            if (!steampath) throw new Error(`Steam installation path not found!`)

            notifyhelper.setcustomisations(customisation,percent,iswebview,appid,steampath,steam3id,hqicon,temp)
            .then(preloadimgs => {
                preloadimgs && preloadimgs.forEach(img => imgs.push(img))
                resolve({
                    msg: `Achievement data for "${apiname}" loaded successfully`,
                    dims: dims
                } as Res)
            })
            .catch((err: { validimgs: HTMLImageElement[] | null, msg: string }) => {
                err.validimgs && err.validimgs.forEach(img => imgs.push(img))
                resolve({
                    msg: `Achievement data for "${apiname}" loaded with errors: ${err.msg}`,
                    dims: dims
                } as Res)
            })
        })

        notifyhelper.checkreadystate("ready",obj,imgs,res)
    } catch (err) {
        const res = {
            msg: `Error loading achievement data for ${apiname}: ${err}`,
            dims: {
                width: 0,
                height: 0,
                offset: 20
            }
        }

        notifyhelper.checkreadystate("failed",obj,imgs,res)
    }
})

ipcRenderer.once("ss",() => document.body.setAttribute("ss",""))
ipcRenderer.on("playback",(event,shouldpause: boolean) => document.body.toggleAttribute("paused",shouldpause))

ipcRenderer.on("notifyfinished", (event,isextwin?: boolean,preset?: string) => {
    if (isextwin) return ipcRenderer.send("notifyclosed",isextwin,preset)

    document.body.addEventListener("transitionend", (event: TransitionEvent) => event.propertyName === "opacity" && ipcRenderer.send("notifyfinished"))
    document.documentElement.style.setProperty("--bodyopacity","0")
})

ipcRenderer.on("notifyclosed", (event,preset: string) => {
    document.getElementById(`${preset}css`) && document.getElementById(`${preset}css`)!.remove()
    document.documentElement.removeAttribute("style")

    const body = document.createElement("body")
    const audio = document.createElement("audio")
    audio.src = ""
    body.appendChild(audio)

    document.body.remove()
    document.documentElement.appendChild(body)
})