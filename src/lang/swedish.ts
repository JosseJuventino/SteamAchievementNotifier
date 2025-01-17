export const translations = {
    global: {
        main: "Huvud",
        rare: "Sällsynt",
        plat: "100%",
        topleft: "Övre vänstra",
        topcenter: "Övre mitten",
        topright: "Övre högra",
        bottomleft: "Nedre vänstra",
        bottomcenter: "Nedre mitten",
        bottomright: "Nedre högra",
        ok: "OK",
        preview: "Förhandsvisning",
        save: "Spara",
        back: "Tillbaka",
        settings: "Inställningar",
        appversion: "Appversion",
        image: "Bild",
        audio: "Ljud",
        folder: "Mapp",
        font: "Typsnitt",
        select: "Välj",
        gametitle: "Spelets titel",
        congrats: "Grattis!",
        achievementunlocked: "Prestation upplåst",
        gamecomplete: "100% Färdig",
        achievementdesc: "Klickade på knappen för att visa testmeddelande",
        gamecompletedesc: "Du har låst upp alla prestationer!",
        defaultcustomfont: "Standard (Inget typsnitt valt)",
        defaultsoundfile: "Standard (Ingen fil vald)",
        defaultsounddir: "Standard (Ingen mapp vald)",
        nowtracking: "Spårar nu prestationer för:",
        nopreview: "Förhandsvisning är inte tillgänglig för det nativa operativsystemet",
        options: "Alternativ",
        resetwindow: "Återställ Fönster",
        show: "Visa",
        exit: "Avsluta",
        releasegame: "Frigör Spel",
        releasegamesub: [
            `Starta om bakgrundsprocessen för Worker och frigör det nuvarande spelet från att spåras`,
            `Prova detta alternativ om du nyligen har stängt ett spel men Steam visar fortfarande att det körs, eller om Steam Achievement Notifier fortfarande visar att det spårar ett spel som redan har stängts`
        ],
        noupdateavailable: "Inga uppdateringar tillgängliga",
        latestversion: "Senaste versionen installerad",
        missingdeps: "Saknad beroende",
        restartapp: "Starta om appen",
        restartappsub: [
            `Om sakerna inte fungerar korrekt, använd detta alternativ för att stänga och öppna appen igen`,
            `Om problemet kvarstår efter att ha startat om appen, överväg att rapportera det genom att använda de inbyggda länkarna på startsidan`
        ],
        suspend: "Pausa",
        resume: "Återuppta",
        new: "Nytt...",
        nodata: "Inga Data",
        findappid: "Hitta AppID",
        findappidsub: [
            `Varje Steam-spel har ett unikt nummer associerat med det - kallat <span class="hl">AppID</span>. Du kan hitta ett Steam-spels associerade AppID genom att kontrollera en av följande:`,
            `I <span class="hl">Steam-klienten</span>, högerklicka på ett spel i ditt <span class="hl">Bibliotek</span> och välj <i>Egenskaper</i> > <i>Uppdateringar</i> - AppID:et kommer att listas här`,
            `URL:en till spelets <span class="hl">Butikssida</span> - det kommer att vara numret listat efter <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Webbplatser som <span class="hl">SteamDB</span> - avsnittet <span class="hl">App Info</span> kommer att lista AppID för varje spel`
        ],
        elemselector: "Notifieringselement",
        unlockmsg: "Upplåsningsmeddelande",
        title: "Prestationstitel",
        desc: "Prestationsbeskrivning"
    },
    app: {
        content: {
            game: "Inget spel upptäckt",
            customise: "Anpassa",
            test: "Visa testmeddelande"
        }
    },
    settings: {
        language: {
            title: "Språk"
        },
        os: {
            title: "Operativsystem",
            content: {
                desktop: "Skapa skrivbordsgenväg",
                startwin: "Starta vid inloggning",
                startmin: "Starta minimerad",
                nohwa: "Inaktivera hårdvaruacceleration",
                litemode: "Lättläst läge"
            }
        },
        notifications: {
            title: "Aviseringar",
            content: {
                rarity: "Sällsynthetsprocent",
                rareonly: "Endast sällsynta",
                all: "Alla",
                off: "Av",
                showpercent: "Visa procent",
                soundonly: "Endast ljud",
                extwin: "Strömma aviseringar",
                audiosrc: "Ljudkälla",
                notify: "Avisera",
                app: "Applikation",
                nowtracking: "Visa spårningsmeddelande",
                nowtrackingscale: "Spårningsskala",
                nowtrackingpos: "Spårningsposition",
                shortcuts: "Aviseringsgenvägar",
                noiconcache: "Inaktivera ikoncache"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Ta Steam-skärmdump",
                screenshots: "Ytterligare media",
                off: "Av",
                overlay: "Skärmdump med aviseringens överlagring",
                monitors: "Skärmdumpskälla",
                hdrmode: "HDR-läge",
                ovpos: "Överlagringsposition",
                ovmatch: "Matcha anpassad position",
                ovx: "Horisontellt förskjutning",
                ovy: "Vertikalt förskjutning",                
                ovpath: "Skärmdumpssökväg",
                ssdelay: "Skärmdumpsfördröjning",
                notifyimg: "Meddelandebild",
                imgpath: "Bildsökväg"
            }
        },
        games: {
            title: "Spel",
            content: {
                linkedgames: "Länkade spel",
                exclusionlist: "Undantagslista"
            }
        },
        accessibility: {
            title: "Tillgänglighet",
            content: {
                noanim: "Inaktivera appfönsteranimationer",
                noupdatedialog: "Inaktivera uppdateringsdialog",
                nvda: "Aktivera NVDA-stöd",
                tooltips: "Visa verktygstips"
            }
        },
        advanced: {
            title: "Avancerad",
            content: {
                pollrate: "Undersökningsfrekvens",
                initdelay: "Försening spårning",
                releasedelay: "Utgivningsfördröjning",
                maxretries: "Maximalt antal återförsök",
                debug: "Debugpanel",
                userust: "Alternativ bearbetningsläge",
                notifydebug: "Visa felsökningsaviseringar",
                usecustomfiles: "Använd anpassade appfiler",
                showcustomfiles: "Visa anpassade appfiler"
            }
        },        
        misc: {
            title: "Övrigt",
            content: {
                checkforupdates: "Sök Efter Uppdateringar",
                log: "Applikationslogg",
                reset: "Återställ appen"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Förinställning",
            content: {
                preset: "Meddelandeinställning",
                iconanim: "Sällsynt ikonanimation",
                alldetails: "Visa alla detaljer",
                usepercent: "Använd Procent",
                displaytime: "Visningstid",
                scale: "Skala",
                customtext: "Anpassad text",
                usegametitle: "Använd speltitel",
                customfont: "Anpassad typsnitt"
            }
        },
        sound: {
            title: "Ljud",
            content: {
                soundmode: "Ljudläge",
                file: "Fil",
                folder: "Slumpmässig",
                soundfile: "Ljudfil",
                sounddir: "Ljudmapp",
                volume: "Volym"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Bakgrundsstil",
                solid: "Solid",
                gradient: "Gradient",
                img: "Bild",
                gameart: "Spelkonst",
                gradientangle: "Gradientvinkel",
                bgimg: "Bakgrundsbild",
                bgimgbrightness: "Ljusstyrka",
                brightness: "Ljusstyrka",
                blur: "Oskärpa",
                roundness: "Rundhet",
                fontsize: "Typsnittstorlek",
                opacity: "Opacitet",
                bgonly: "Endast bakgrund",
                glow: "Glow",
                glowcolor: "Färg",
                glowsize: "Storlek",
                glowx: "Horisontell förskjutning",
                glowy: "Vertikal förskjutning",
                glowopacity: "Opacitet",
                glowanim: "Animation",
                glowspeed: "Hastighet",
                off: "Ingen",
                pulse: "Puls",
                rainbow: "Regnbåge",
                mask: "Mask",
                maskimg: "Maskbild"
            }
        },
        colors: {
            title: "Färger",
            content: {
                primarycolor: "Primärfärg",
                secondarycolor: "Sekundärfärg",
                tertiarycolor: "Tertiärfärg",
                fontcolor: "Typsnittsfärg",
                fontoutline: "Typsnittets kontur",
                fontoutlinecolor: "Typsnittets konturfärg",
                fontshadow: "Typsnittsskugga",
                fontshadowcolor: "Typsnittsskuggans färg"
            }
        },
        icons: {
            title: "Ikoner",
            content: {
                iconroundness: "Ikonens rundhet",
                plat: "100 % -logotyp",
                usegameicon: "Använd spelikonen",
                logo: "Logotyp",
                decoration: "Dekoration",
                showdecoration: "Visa dekoration",
                rarity: "Sällsynthet",
                showhiddenicon: "Visa Dold ikon",
                hiddenicon: "Dold ikon",
                replacelogo: "Ersätt Logo"
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Skärmposition",
                usecustompos: "Använd anpassad position",
                setcustompos: "Ange",
                resetcustompos: "Återställ"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Uppdatera Tema",
                savetheme: "Spara tema",
                sub: [
                    `Sparade <span class="hl">Användarteman</span> kan väljas från menyn <span class="hl">Välj tema</span> på startskärmen.`,
                    `Se till att <span class="hl">Temans namn</span> är <u>unikt</u> - ett namn som matchar ett befintligt tema <u>kommer att skriva över det föregående</u>!`
                ],
                placeholder: "Temans namn",
                theme: "Tema",
                importtheme: "Importera Tema",
                import: "Importera",
                importsub: [
                    `Importera en användarskapad <span class="hl">temafil</span>`,
                    `<span class="hl">Importerade teman</span> kommer att laddas automatiskt när de har importerats framgångsrikt och kan väljas från menyn <span class="hl">Välj tema</span>`,
                ],
                importidle: `Välj en <span class="hl">temafil</span> att importera`,
                importcopied: `Tema kopierat framgångsrikt`,
                importrenamed: `Tema omdöpt framgångsrikt`,
                importextracted: `Tema extraherat framgångsrikt`,
                importrewriting: `Omskrivning av temafilvägar...`,
                importconverting: `Konverterar tema...`,
                importcreating: `Skapar tema...`,
                importdone: `Tema importerat framgångsrikt`,
                importfailed: `Fel vid import av vald temafil!`,
                exporttheme: "Exportera Tema",
                export: "Exportera"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "Det här är vad som har hänt sedan appen startades",
            copylog: "Kopiera logg innehåll"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Är du säker?</span>
                    <span>All tidigare konfigurerade data, <u>inklusive Anpassningar</u>, återställs till standardvärden.</span>
                    <span>🛑 Denna åtgärd kan inte ångras!</span>
                </div>
            `,
            reset: "Återställ"
        }
    },
    error: {
        content: {
            subtitle: "Steam Prestationsmeddelande har stött på ett problem och behöver stängas av.",
            details: "Här är feldetaljerna:",
            sub: "Klicka på knapparna nedan för att rapportera detta problem via din föredragna plattform.",
            report: "Rapportera",
            log: "Applogg",
            exit: "Avsluta"
        }
    },    
    tooltips: {
        game: "Spelet för vilket prestationer för närvarande spåras",
        usertheme: "Välj en tidigare sparad tema",
        customise: "Anpassa prestationaviseringar",
        test: "Visa ett testmeddelande, inklusive eventuella anpassningar",
        kofi: "Donera på Ko-Fi!",
        discord: "Gå med på Discord!",
        github: "Rapportera ett problem",
        lang: "Välj det användargränssnittsspråk som används i appen",
        desktop: "Växla en genväg på skrivbordet för att köra appen",
        startwin: "Starta Steam Achievement Notifier automatiskt efter inloggning",
        startmin: "Efter starten dölj appens användargränssnittsfönster tills det öppnas från systemfältet",
        nohwa: `Inaktivera hårdvaruacceleration, vilket kan förbättra prestandan på system med begränsade resurser eller system utan dedikerad GPU<br><br><span class="ttdesc">Appen kommer att starta om efter aktivering/inaktivering av detta alternativ</span>`,
        litemode: "Inaktivera alla interaktiva användargränssnittselement och erbjuda endast begränsad appfunktionalitet via systemfältets ikon. Kan förbättra resursförbrukningen av appen",
        rarity: "Procentandelen vid vilken sällsynta prestationaviseringar kommer att utlösas. Alla prestationer med en upplåsningsprocent över detta värde visas som huvudaviseringar",
        showpercent: "Visa upplåsningsprocenten för prestationen i aviseringen för de valda typerna",
        soundonly: "Inaktivera aviseringar och spela endast ljud som är inställt via anpassaren",
        extwin: "Skapa ett dolt bakgrundsfönster som duplicerar alla aviseringar som för närvarande visas på skärmen. Detta fönster kan sedan läggas till som en Window Capture-källa för användning i streamingprogramvara, som OBS",
        audiosrc: "Välj källan för (eller inaktivera) ljud som genereras av appen",
        nowtracking: "Visa en avisering som meddelar användaren att prestationer för ett körande spel spåras",
        nowtrackingscale: `Ange storleken på spårningsmeddelandet`,
        nowtrackingpos: `Ange positionen för spårningsmeddelandet`,
        shortcuts: "Utlös ett testmeddelande via en tangentbordsgenväg. Genvägar kan anpassas för varje typ av avisering",
        noiconcache: `Inaktiverar ikoncaching vid start av spel.<br><br><span class="ttdesc">Detta kan betydligt förbättra appens prestanda vid start av spel och lösa även spårningsproblem med spel som har ett stort antal prestationer. Dock kan inaktivering av ikoncaching i sällsynta fall leda till att prestationsikoner saknas i aviseringar</span>`,
        steamss: "Ta en Steam-skärmdump när en prestation låses upp",
        screenshots: "Välj typen av ytterligare media som ska skapas när en avisering visas",
        monitors: "Monitorn som kommer att fångas när skärmdumpen tas",
        hdrmode: `Ta skärmbilder med en metod som är kompatibel med skärmar som använder High Dynamic Range (HDR)`,
        ovpos: "Positionen för aviseringens överlagring i skärmdumpen",
        ovmatch: "Matcha skärmläget som är inställt i anpassaren för denna typ av avisering",
        ovpath: "Platsen där skärmdumpar som genereras av detta alternativ kommer att sparas",
        ssdelay: "Lägg till en fördröjning från när aviseringen inträffar till när skärmdumpen tas",
        sspreview: "Visa en förhandsgranskning av hur skärmdumpen kommer att se ut när den sparas",
        noanim: "Inaktivera alla fönsteranimationer och övergångseffekter i appen",
        noupdatedialog: `Förhindrar att dialogrutan <span class="hl">Uppdatering tillgänglig</span> visas automatiskt och får fokus<br><br><span class="ttdesc">Dialogrutan kan fortfarande öppnas genom att klicka på uppdateringsknappen när den är tillgänglig</span>`,
        nvda: "Aktivera kopiering av prestationinformation till urklipp när en prestation låses upp, för att läsas av skärmläsarprogramvara, som NVDA",
        tooltips: "Visa verktygstips när du håller musen över vissa användargränssnittselement",
        pollrate: `Ställ in uppdateringsintervallet för prestationdata under spel<br><br><span class="ttdesc">Prestandan kan öka/minska beroende på värdet eller systemets maskinvara. Högre värden resulterar vanligtvis i lägre systembelastning, men kan orsaka fördröjningar i aviseringar</span>`,
        initdelay: `Ställ in förseningen mellan upptäckten av aktuellt <span class="hl">AppID</span> och när process-/prestations-spårning börjar<br><br><span class="ttdesc">Att öka detta värde kan förhindra scenarier där Steam inte kan starta det aktuella spelet (på grund av att applikationen initialiserar Steamworks innan spelet har startats)</span><br><br><span class="ttdesc">Alternativt kan ökning av detta värde också användas för att kringgå felaktig upptäckt av för-spelsstart-processer</span>`,
        releasedelay: `Anger hur länge bakgrundsprocessen ska vänta innan den startar om efter att det aktuella spelet har släppts. Påverkar både automatisk processövervakning och manuellt länkade spel.<br><br><span class="ttdesc">Ger en längre tidsram för att helt frigöra Steamworks från appen. Att öka detta värde kan förhindra ovanligt beteende, som att spåra ett tidigare stängt spel</span>`,
        maxretries: `Anger det maximala antalet försök att länka en körande process till en upptäckt AppID. Påverkar både automatisk processövervakning och manuellt länkade spel.<br><br><span class="ttdesc">Försök att länka utförs en gång per sekund. Om en körande process inte är länkad till det aktuella AppID:et efter detta antal försök returneras en ogiltig process. I sådana fall måste spelet släppas manuellt via Systemfältet > Alternativ > Släpp Spel</span>`,
        debug: "Öppna Debugpanelen, som visar detaljerad processpårningsinformation",
        userust: "Använd en alternativ Rust-baserad funktion för att kontrollera om de spårade spelprocesserna för närvarande körs på systemet. När det inte är markerat kommer standardprocesskontrollen baserad på NodeJS att användas istället.",
        notifydebug: "Skapa ett DevTools-fönster för alla aviseringar. Användbart för felsökning av aviseringar",
        usecustomfiles: "Aktiverar aviseringar för att ladda användaranpassade filer. Försiktighet rekommenderas för vanliga användare",
        showcustomfiles: "Öppna platsen för de anpassade filerna",
        log: "Öppna apploggen som visar information om processaktivitet, varningar och fel",
        reset: "Ta bort all konfigurationsdata och starta om appen",
        playback: "Pausa/återuppta animationen av förhandsgranskningen av aviseringen",
        replay: "Starta om animationen av förhandsgranskningen av aviseringen",
        preset: "Välj förinställningen för aviseringen att anpassa",
        iconanim: "Växla sällsynt ikonram och animation",
        alldetails: "Visa alla textelement i aviseringen, inklusive de som är dolda som standard för denna förinställning",
        usepercent: "Visa låsningsprocenten för prestationen, istället för XP/S-värdet",
        displaytime: "Ange antalet sekunder som aviseringen kommer att visas",
        scale: "Öka eller minska storleken på aviseringen",
        customtext: "Ange ett anpassat meddelande som ska visas i aviseringen",
        usegametitle: "Visa titeln på det aktuella spelet i aviseringen",
        customfont: "Ladda en anpassad typsnitt som ska användas i aviseringen",
        soundmode: "Välj antingen en enskild ljudfil eller en slumpmässigt vald ljudfil från en mapp som innehåller flera ljudfiler när en avisering inträffar",
        soundfile: "Välj en ljudfil som ska spelas när en avisering inträffar",
        sounddir: "Välj en mapp från vilken en ljudfil slumpmässigt kommer att väljas när en avisering inträffar",
        volume: "Ställ in uppspelningsvolymen för ljudfilen",
        preview: "Förhandsgranska den valda ljudfilen eller en slumpmässigt vald ljudfil från mappen",
        bgstyle: "Välj stilen för bakgrunden i aviseringen",
        gradientangle: "Ange vinkeln för gradienten",
        bgimg: "Ladda en bildfil som ska användas som bakgrund för aviseringen",
        bgimgbrightness: "Ställ in ljusstyrkan för bilden som används som bakgrund för aviseringen",
        brightness: "Ställ in ljusstyrkan för spelkonst som används som bakgrund för aviseringen",
        blur: "Ställ in nivån av suddighet som appliceras på bakgrunden av meddelandet",
        roundness: "Ställ in rundheten för aviseringens kanter",
        fontsize: "Ställ in storleken på teckensnittet som används i aviseringen",
        opacity: "Ställ in den totala opaciteten för aviseringen",
        bgonly: "Ställ endast in opaciteten för aviseringens bakgrund och behåll andra element med full opacitet",
        glow: "Aktivera en glödeffekt som omger meddelandet",
        glowcolor: "Ställ in färgen på glödeffekten",
        glowsize: "Ställ in storleken på glödeffekten",
        glowx: "Justera den horisontella positionen för ljuseffekten",
        glowy: "Justera den vertikala positionen för ljuseffekten",
        glowopacity: "Ställ in opaciteten för ljuseffekten",
        glowanim: "Välj en fördefinierad animation som ska tillämpas på glödeffekten",
        glowspeed: "Ställ in hastigheten på animationen som tillämpas på glödeffekten",
        mask: "Aktivera maskering av delar av meddelandet med en anpassad bild",
        maskimg: `Ladda en bildfil som ska användas som mask<br><br><span class="ttdesc">I CSS fungerar <code class="ttcode">mask-mode: alpha</code> på ett motsatt sätt än vad som vanligtvis förväntas - områden med genomskinlighet i bildfilen kommer att förbli osynliga, medan svarta/grå områden tillåter de underliggande elementen att vara synliga</span>`,
        primarycolor: "Ställ in primärfärgen för aviseringen",
        secondarycolor: "Ställ in sekundärfärgen för aviseringen",
        tertiarycolor: "Ställ in tertiärfärgen för aviseringen",
        fontcolor: "Ställ in färgen på all text som visas i aviseringen",
        fontoutline: "Lägg till en kontur till all text som visas i aviseringen",
        fontoutlinecolor: "Ställ in färgen på textens kontur",
        fontshadow: "Lägg till en skugga till all text som visas i aviseringen",
        fontshadowcolor: "Ställ in färgen på textens skugga",
        iconroundness: "Ställ in rundheten för prestation/spelikonen som visas i aviseringen",
        plat: "Ladda en bildfil som ska användas som 100% ikon",
        usegameicon: "Ersätt standardaviseringssymbolen med ikonen för det aktuella spelet",
        showhiddenicon: "Visa en bild som indikerar att prestationen är dold i meddelandet",
        hiddenicon: "Ladda upp en bildfil för att ersätta den dolda prestationens ikon",
        logo: "Ladda en bildfil för att ersätta logotypen",
        decoration: "Ladda en bildfil för att ersätta dekorationsikonen",
        showdecoration: "Växla synligheten för dekorationsikonen",
        replacelogo: "Ersätt logotypikonen i meddelandet med den valda dekorationen",
        pos: "Ställ in skärmläget för aviseringen",
        usecustompos: "Aktivera anpassad positionering för aviseringen",
        setcustompos: "Ställ in den anpassade positionen för aviseringen",
        resetcustompos: "Återställ aviseringens position till standardanpassad position",
        updatetheme: "Uppdatera det aktuella temat med de valda anpassningsalternativen",
        savetheme: "Spara alla konfigurerade anpassningsalternativ som ett nytt tema",
        visibilitybtn: "Växla synligheten för elementet i anpassade förhandsvisningar och testmeddelanden",
        delbtn: "Återställ elementet till standardvärdet",
        link: `Öppna <span class="hl">Menyn för hantering av länkade spel</span>`,
        imgpath: "Platsen där meddelandebilder genererade av detta alternativ kommer att sparas",
        linkedgames: `Bypassa <span class="hl">automatisk processpårning</span> för specifika Steam-spel<br><br><span class="ttdesc">Denna alternativ bör endast användas i mycket specifika scenarier. Användare bör inte behöva använda detta alternativ under normala omständigheter!</span>`,
        exclusionlist: `Förhindra att prestationer i specifika Steam-spel spåras av appen<br><br><span class="ttdesc">Denna alternativ bör endast användas i mycket specifika scenarier. Användare bör inte behöva använda detta alternativ under normala omständigheter!</span>`,
        ovx: "Förskjutning av meddelandet som visas i skärmdumpen horisontellt",
        ovy: "Förskjutning av meddelandet som visas i skärmdumpen vertikalt",
        importtheme: `Importera anpassningar via en användarskapad <span class="hl">temafil</span>`,
        exporttheme: `Exportera det aktuellt valda <span class="hl">temat</span> för delning<br><br><span class="ttdesc">Innan du försöker exportera, se till att det önskade <span class="hl">temat</span> är valt (via menyn <span class="hl">Välj tema</span>). Kontrollera också att anpassningar har sparats i det valda <span class="hl">temat</span> (via menyn <span class="hl">Spara tema</span>)<br><br><u>Alla anpassningar som inte har sparats i det aktuella <span class="hl">temat</span> kommer inte att exporteras!</u></span>`        
    },
    update: {
        updateavailable: "Uppdatering tillgänglig",
        sub: [
            `<span id="newversion"></span>`,
            "En ny uppdatering av Steam Achievement Notifier är tillgänglig!",
            `Fullständiga versionsanteckningar finns tillgängliga på <span id="discordreleasenotes"></span> och <span id="githubreleasenotes"></span>`
        ],
        update: "Uppdatera"
    },
    linkgame: {
        content: {
            exepath: "Sökväg till Körbar Fil",
            managesub: [
                `Länka manuellt en <span class="hl">körbar fil</span> för ett spel till en specifik <span class="hl">AppID</span>, eller <span class="hl">avlägsna länkning</span> för en befintlig`,
                `Steam Achievement Notifier kommer inte längre använda <span class="hl">automatisk processpårning</span> för några <span class="hl">länkade spel</span> - istället kommer den angivna <span class="hl">körbara filen</span> att spåras varje gång den associerade <span class="hl">AppID</span> upptäcks`,
                `<span class="hl" id="appidhelp"><u>Hur hittar jag ett Steam-spels AppID?</u></span>`
            ],
            linknew: "Nytt Länkat Spel",
            linknewsub: [
                `Skapa en ny länk mellan en <span class="hl">körbar fil för spelet</span> och det associerade <span class="hl">AppID</span>`,
                `Efter att ha skapats kan länkar <span class="hl">avlägsnas</span> via den tidigare <span class="hl">Hantera Länkade Spel</span>-dialogrutan`
            ],
            link: "Länka",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Lägg till <span class="hl">AppID</span> för valfritt Steam-spel i <span class="hl">Undantagslistan</span>`,
                `Steam Achievement Notifier kommer inte att försöka spåra prestandadata för något spel vars <span class="hl">AppID</span> lagts till <span class="hl">Undantagslistan</span>`,
                `<span class="hl" id="appidhelp"><u>Hur hittar jag AppID för ett Steam-spel?</u></span>`
            ],
            exclusionnew: "Ny uteslutning",
            exclusionnewsub: [
                `Ange <span class="hl">AppID</span> för att lägga till i <span class="hl">Undantagslistan</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Det verkar som att du försöker aktivera alternativet <span class="hl">${opt}</span>. Dock kan inte skärmbilder aktiveras på Linux-system utan att först installera paketet <code class="dialogcode">${dep}</code>`,
    `Kör <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> för att installera denna beroendet. Detta kommer att säkerställa att skärmbilder kan tas på denna enhet`
]