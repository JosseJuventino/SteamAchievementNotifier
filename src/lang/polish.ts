export const translations = {
    global: {
        main: "Główny",
        rare: "Rzadki",
        plat: "100%",
        topleft: "Górny lewy",
        topcenter: "Górny środek",
        topright: "Górny prawy",
        bottomleft: "Dolny lewy",
        bottomcenter: "Dolny środek",
        bottomright: "Dolny prawy",
        ok: "OK",
        preview: "Podgląd",
        save: "Zapisz",
        back: "Wstecz",
        settings: "Ustawienia",
        appversion: "Wersja aplikacji",
        image: "Obraz",
        audio: "Audio",
        folder: "Folder",
        font: "Czcionka",
        select: "Wybierz",
        gametitle: "Tytuł gry",
        congrats: "Gratulacje!",
        achievementunlocked: "Osiągnięcie odblokowane",
        gamecomplete: "100% ukończone",
        achievementdesc: "Kliknięto przycisk Pokaż powiadomienie testowe",
        gamecompletedesc: "Odblokowałeś wszystkie osiągnięcia!",
        defaultcustomfont: "Domyślne (Nie wybrano czcionki)",
        defaultsoundfile: "Domyślne (Nie wybrano pliku dźwiękowego)",
        defaultsounddir: "Domyślne (Nie wybrano folderu)",
        nowtracking: "Aktualnie śledzenie osiągnięć dla:",
        nopreview: "Podgląd niedostępny dla natywnego systemu operacyjnego",
        options: "Opcje",
        resetwindow: "Resetuj okno",
        show: "Pokaż",
        exit: "Wyjście",
        releasegame: "Zakończ śledzenie gry",
        releasegamesub: [
            `Zrestartuj proces Workera działającego w tle i zakończ śledzenie aktualnej gry`,
            `Wypróbuj tę opcję, jeśli niedawno zamknąłeś grę, ale Steam nadal pokazuje ją jako uruchomioną, lub jeśli Steam Achievement Notifier nadal pokazuje, że śledzi grę, która już została zamknięta`
        ],
        noupdateavailable: "Brak dostępnych aktualizacji",
        latestversion: "Najnowsza wersja zainstalowana",
        missingdeps: "Brakujące zależności",
        restartapp: "Uruchom ponownie aplikację",
        restartappsub: [
            `Jeśli coś nie działa prawidłowo, skorzystaj z tej opcji, aby zamknąć i ponownie otworzyć aplikację`,
            `Jeśli problem nadal występuje po ponownym uruchomieniu aplikacji, rozważ zgłoszenie go za pomocą wbudowanych linków na ekranie głównym`
        ],
        suspend: "Wstrzymaj",
        resume: "Wznów",
        new: "Nowy...",
        nodata: "Brak danych",
        findappid: "Znajdź AppID",
        findappidsub: [
            `Każda gra Steam ma przypisany do niej unikalny numer - nazywany <span class="hl">AppID</span>. Możesz znaleźć AppID powiązane z dowolną grą Steam, sprawdzając jedną z poniższych metod:`,
            `W <span class="hl">kliencie Steam</span>, kliknij prawym przyciskiem myszy grę w <span class="hl">bibliotece</span>, a następnie wybierz <i>Właściwości</i> > <i>Aktualizacje</i> - tutaj będzie wymieniony AppID`,
            `URL do <span class="hl">strony sklepu</span> gry - będzie to liczba wymieniona po <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Strony internetowe takie jak <span class="hl">SteamDB</span> - sekcja <span class="hl">Informacje o aplikacji</span> wylistuje AppID dla każdej gry`
        ],
        elemselector: "Elementy powiadomień",
        unlockmsg: "Wiadomość odblokowania",
        title: "Tytuł osiągnięcia",
        desc: "Opis osiągnięcia"
    },
    app: {
        content: {
            game: "Nie wykryto gry",
            customise: "Dostosuj",
            test: "Pokaż powiadomienie testowe"
        }
    },
    settings: {
        language: {
            title: "Język"
        },
        os: {
            title: "System operacyjny",
            content: {
                desktop: "Utwórz skrót na pulpicie",
                startwin: "Uruchom przy logowaniu",
                startmin: "Uruchom zminimalizowany",
                nohwa: "Wyłącz akcelerację sprzętową",
                litemode: "Tryb lekki"
            }
        },
        notifications: {
            title: "Powiadomienia",
            content: {
                rarity: "Procent rzadkości",
                rareonly: "Tylko rzadkie",
                all: "Wszystkie",
                off: "Wyłączone",
                showpercent: "Pokaż procent",
                soundonly: "Tylko dźwięk",
                extwin: "Powiadomienia strumieniowe",
                audiosrc: "Źródło dźwięku",
                notify: "Powiadomienie",
                app: "Aplikacja",
                nowtracking: "Pokaż powiadomienie o śledzeniu",
                nowtrackingscale: "Skala śledzenia",
                nowtrackingpos: "Śledzenie pozycji",
                shortcuts: "Skróty powiadomień",
                noiconcache: "Wyłącz pamięć podręczną ikon"
            }
        },
        media: {
            title: "Media",
            content: {
                steamss: "Zrób zrzut ekranu Steam",
                screenshots: "Dodatkowe media",
                off: "Wyłączone",
                overlay: "Zrzut ekranu z nakładką powiadomienia",
                monitors: "Źródło zrzutu ekranu",
                hdrmode: "Tryb HDR",
                ovpos: "Pozycja nakładki",
                ovmatch: "Dopasuj pozycję dostosowania",
                ovx: "Przesunięcie poziome",
                ovy: "Przesunięcie pionowe",                
                ovpath: "Ścieżka zrzutu ekranu",
                ssdelay: "Opóźnienie zrzutu ekranu",
                notifyimg: "Obrazek powiadomienia",
                imgpath: "Ścieżka obrazu"
            }
        },
        games: {
            title: "Gry",
            content: {
                linkedgames: "Połączone gry",
                exclusionlist: "Lista wyłączeń"
            }
        },
        accessibility: {
            title: "Dostępność",
            content: {
                noanim: "Wyłącz animacje okna aplikacji",
                noupdatedialog: "Wyłącz okno aktualizacji",
                nvda: "Włącz obsługę NVDA",
                tooltips: "Pokaż etykiety narzędzi"
            }
        },
        advanced: {
            title: "Zaawansowane",
            content: {
                pollrate: "Częstotliwość odpytywania",
                initdelay: "Opóźnienie śledzenia",
                releasedelay: "Opóźnienie Wydania",
                maxretries: "Maksymalna liczba prób przetwarzania",
                debug: "Panel debugowania",
                userust: "Alternatywny tryb przetwarzania",
                notifydebug: "Pokaż powiadomienia debugowania",
                usecustomfiles: "Użyj niestandardowych plików aplikacji",
                showcustomfiles: "Pokaż niestandardowe pliki aplikacji"
            }
        },        
        misc: {
            title: "Różne",
            content: {
                checkforupdates: "Sprawdź Aktualizacje",
                log: "Dziennik Aplikację",
                reset: "Resetuj Aplikację"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Ustawienia wstępne",
            content: {
                preset: "Ustawienia powiadomień",
                iconanim: "Animacja Rzadkiego Ikony",
                alldetails: "Pokaż Wszystkie Szczegóły",
                usepercent: "Użyj procenta",
                displaytime: "Czas Wyświetlania",
                scale: "Skala",
                customtext: "Niestandardowy Tekst",
                usegametitle: "Użyj Tytułu Gry",
                customfont: "Niestandardowa Czcionka"
            }
        },
        sound: {
            title: "Dźwięk",
            content: {
                soundmode: "Tryb Dźwięku",
                file: "Plik",
                folder: "Losowy",
                soundfile: "Plik Dźwiękowy",
                sounddir: "Katalog Dźwiękowy",
                volume: "Głośność"
            }
        },
        style: {
            title: "Styl",
            content: {
                bgstyle: "Styl Tła",
                solid: "Jednolite",
                gradient: "Gradient",
                img: "Obraz",
                gameart: "Sztuka Gry",
                gradientangle: "Kąt Gradientu",
                bgimg: "Obraz Tła",
                bgimgbrightness: "Jasność",
                brightness: "Jasność",
                blur: "Rozmycie",
                roundness: "Zaokrąglenie",
                fontsize: "Rozmiar Czcionki",
                opacity: "Nieprzezroczystość",
                bgonly: "Tylko Tło",
                glow: "Poświata",
                glowcolor: "Kolor",
                glowsize: "Rozmiar",
                glowx: "Przesunięcie poziome",
                glowy: "Przesunięcie pionowe",
                glowopacity: "Przezroczystość",
                glowanim: "Animacja",
                glowspeed: "Prędkość",
                off: "Brak",
                pulse: "Puls",
                rainbow: "Tęcza",
                mask: "Maska",
                maskimg: "Obraz maski"
            }
        },
        colors: {
            title: "Kolory",
            content: {
                primarycolor: "Główny Kolor",
                secondarycolor: "Wtórny Kolor",
                tertiarycolor: "Kolor Trzeci",
                fontcolor: "Kolor Czcionki",
                fontoutline: "Obrys Czcionki",
                fontoutlinecolor: "Kolor Obrysu Czcionki",
                fontshadow: "Cień Czcionki",
                fontshadowcolor: "Kolor Cienia Czcionki"
            }
        },
        icons: {
            title: "Ikony",
            content: {
                iconroundness: "Zaokrąglenie Ikony",
                plat: "Logo 100%",
                usegameicon: "Użyj Ikony Gry",
                logo: "Logo",
                decoration: "Dekoracja",
                showdecoration: "Pokaż Dekorację",
                rarity: "Rzadkość",
                showhiddenicon: "Pokaż Ukrytą Ikonę",
                hiddenicon: "Ukryta Ikona",
                replacelogo: "Zmień Logo"
            }
        },
        position: {
            title: "Pozycja",
            content: {
                pos: "Pozycja Ekranu",
                usecustompos: "Użyj Niestandardowej Pozycji",
                setcustompos: "Ustaw",
                resetcustompos: "Resetuj"
            }
        },
        theme: {
            title: "Motyw",
            content: {
                updatetheme: "Aktualizuj Motyw",
                savetheme: "Zapisz Motyw",
                sub: [
                    `Zapisane <span class="hl">Motywy Użytkownika</span> można wybrać z menu <span class="hl">Wybierz Motyw</span> na ekranie głównym.`,
                    `Upewnij się, że <span class="hl">Nazwa Motywu</span> jest <u>unikalna</u> - nazwa pasująca do istniejącego motywu <u>zastąpi poprzedni</u>!`
                ],
                placeholder: "Nazwa Motywu",
                theme: "Motyw",
                importtheme: "Importuj motyw",
                import: "Importuj",
                importsub: [
                    `Importuj <span class="hl">plik motywu</span> stworzony przez użytkownika`,
                    `Importowane <span class="hl">motywy</span> zostaną automatycznie załadowane po pomyślnym imporcie i mogą być wybrane z menu <span class="hl">Wybierz motyw</span>`,
                ],
                importidle: `Wybierz <span class="hl">plik motywu</span> do zaimportowania`,
                importcopied: `Motyw został pomyślnie skopiowany`,
                importrenamed: `Motyw został pomyślnie zmieniony nazwę`,
                importextracted: `Motyw został pomyślnie rozpakowany`,
                importrewriting: `Przepisywanie ścieżek plików motywu...`,
                importconverting: `Konwertowanie motywu...`,
                importcreating: `Tworzenie motywu...`,
                importdone: `Motyw został pomyślnie zaimportowany`,
                importfailed: `Błąd podczas importowania wybranego pliku motywu!`,
                exporttheme: "Eksportuj motyw",
                export: "Eksportuj"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "Oto co wydarzyło się od uruchomienia aplikacji",
            copylog: "Skopiuj Zawartość Dziennika"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Czy na pewno?</span>
                    <span>Wszystkie wcześniej skonfigurowane dane, <u>w tym Dostosowania</u>, zostaną zresetowane do domyślnych wartości.</span>
                    <span>🛑 Tej operacji nie można cofnąć!</span>
                </div>
            `,
            reset: "Resetuj"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier napotkał problem i musi zostać zamknięty.",
            details: "Oto szczegóły błędu:",
            sub: "Kliknij poniższe przyciski, aby zgłosić ten problem za pomocą preferowanej platformy.",
            report: "Zgłoś",
            log: "Dziennik Aplikacji",
            exit: "Wyjdź"
        }
    },    
    tooltips: {
        game: "Gra, dla której obecnie śledzone są osiągnięcia",
        usertheme: "Wybierz wcześniej zapisany motyw",
        customise: "Dostosuj powiadomienia o osiągnięciach",
        test: "Pokaż powiadomienie testowe, wraz z wszelkimi dostosowaniami",
        kofi: "Wesprzyj na Ko-Fi!",
        discord: "Dołącz na Discord!",
        github: "Zgłoś problem",
        lang: "Wybierz język interfejsu użytkownika używany w aplikacji",
        desktop: "Przełącz skrót na pulpicie, aby uruchomić aplikację",
        startwin: "Uruchom Steam Achievement Notifier automatycznie po zalogowaniu",
        startmin: "Po uruchomieniu ukryj okno interfejsu użytkownika aplikacji, aż zostanie otwarte z System Tray",
        nohwa: `Wyłącz akcelerację sprzętową, co może poprawić wydajność na systemach z ograniczonymi zasobami lub systemach bez dedykowanej karty graficznej<br><br><span class="ttdesc">Aplikacja zostanie ponownie uruchomiona po włączeniu/wyłączeniu tej opcji</span>`,
        litemode: "Wyłącz wszystkie interaktywne elementy interfejsu użytkownika, zapewniając jednocześnie ograniczoną funkcjonalność aplikacji za pomocą ikony System Tray. Może poprawić wykorzystanie zasobów przez aplikację",
        rarity: "Procent, przy którym będą wyświetlane powiadomienia o rzadkich osiągnięciach. Każde osiągnięcie o wartości odblokowania powyżej tej wartości będzie wyświetlane jako główne powiadomienie",
        showpercent: "Wyświetl procent odblokowania osiągnięcia w powiadomieniu dla wybranych typów",
        soundonly: "Wyłącz powiadomienia, odtwarzając tylko dźwięki ustawione za pomocą Customiser",
        extwin: "Utwórz ukryte tło, które duplikuje wszelkie aktualnie wyświetlane powiadomienia na ekranie. To okno można następnie dodać jako źródło przechwytywania okna do oprogramowania do strumieniowania, takiego jak OBS",
        audiosrc: "Wybierz źródło dźwięku generowanego przez aplikację (lub wyłącz)",
        nowtracking: "Wyświetl powiadomienie informujące użytkownika, że śledzone są osiągnięcia dla uruchomionej gry",
        nowtrackingscale: `Ustaw rozmiar powiadomienia o śledzeniu`,
        nowtrackingpos: `Ustawienie pozycji powiadomienia o śledzeniu`,
        shortcuts: "Wywołaj powiadomienie testowe za pomocą skrótu klawiaturowego. Skróty można dostosować dla każdego typu powiadomienia",
        noiconcache: `Wyłącza buforowanie ikon osiągnięć podczas uruchamiania gier.<br><br><span class="ttdesc">Może to znacząco poprawić wydajność aplikacji podczas uruchamiania gier i rozwiązać problemy z śledzeniem gier, które mają dużą liczbę osiągnięć. Jednakże w rzadkich przypadkach wyłączenie buforowania ikon może skutkować brakiem ikon osiągnięć w powiadomieniach</span>`,
        steamss: "Zrób zrzut ekranu Steam po odblokowaniu osiągnięcia",
        screenshots: "Wybierz rodzaj dodatkowych mediów do utworzenia podczas wyświetlania powiadomienia",
        monitors: "Monitor, który zostanie przechwycony podczas robienia zrzutu ekranu",
        hdrmode: `Wykonuj zrzuty ekranu za pomocą metody kompatybilnej z monitorami obsługującymi technologię High Dynamic Range (HDR)`,
        ovpos: "Pozycja nakładki powiadomienia na zrzucie ekranu",
        ovmatch: "Dopasuj pozycję ekranu ustawioną w Customiser dla tego typu powiadomienia",
        ovpath: "Lokalizacja, w której będą zapisywane zrzuty ekranu generowane przez tę opcję",
        ssdelay: "Dodaj opóźnienie od wystąpienia powiadomienia do wykonania zrzutu ekranu",
        sspreview: "Pokaż podgląd, jak będzie wyglądał zapisany zrzut ekranu",
        noanim: "Wyłącz wszystkie animacje okna aplikacji i efekty przejścia",
        noupdatedialog: `Uniemożliwia automatyczne wyświetlanie i ustawienie w trybie pierwszoplanowym okna dialogowego <span class="hl">Dostępna aktualizacja</span><br><br><span class="ttdesc">Okno dialogowe nadal można otworzyć, klikając przycisk aktualizacji, gdy jest dostępny</span>`,
        nvda: "Włącz kopiowanie informacji o osiągnięciu do schowka po odblokowaniu osiągnięcia, aby można je było odczytać za pomocą oprogramowania czytnika ekranu, takiego jak NVDA",
        tooltips: "Wyświetl podpowiedzi po najechaniu na określone elementy interfejsu użytkownika",
        pollrate: `Ustaw interwał aktualizacji danych o osiągnięciach podczas gry<br><br><span class="ttdesc">Wydajność może wzrosnąć/zmaleć w zależności od wartości lub sprzętu systemowego. Wyższe wartości zazwyczaj prowadzą do mniejszego obciążenia systemu, ale mogą opóźniać powiadomienia</span>`,
        initdelay: `Ustaw opóźnienie między wykryciem bieżącego <span class="hl">AppID</span> a rozpoczęciem śledzenia procesów/osiągnięć<br><br><span class="ttdesc">Zwiększenie tej wartości może zapobiec sytuacjom, w których Steam nie może uruchomić aktualnej gry (ze względu na inicjalizację aplikacji w Steamworks przed uruchomieniem gry)</span><br><br><span class="ttdesc">Alternatywnie, zwiększenie tej wartości może być również używane do pominięcia nieprawidłowego wykrywania procesów przed uruchomieniem gry</span>`,
        releasedelay: `Ustawia, jak długo proces w tle ma czekać na ponowne uruchomienie po wydaniu obecnej gry. Wpływa zarówno na automatyczne śledzenie procesów, jak i gry ręcznie połączone.<br><br><span class="ttdesc">Umożliwia dłuższy okres na całkowite uwolnienie Steamworks od aplikacji. Zwiększenie tej wartości może zapobiec nietypowemu zachowaniu, takiemu jak śledzenie wcześniej zamkniętej gry</span>`,
        maxretries: `Ustawia maksymalną liczbę prób połączenia działającego procesu z wykrytym AppID. Wpływa zarówno na automatyczne śledzenie procesów, jak i gry ręcznie połączone.<br><br><span class="ttdesc">Próby połączenia są podejmowane raz na sekundę. Jeśli działający proces nie jest połączony z bieżącym AppID po tej liczbie prób, zostanie zwrócony błędny proces. W takich przypadkach grę należy uwolnić ręcznie za pomocą zasobnika systemowego > Opcje > Zwolnij grę</span>`,
        debug: "Otwórz panel debugowania, który wyświetla szczegółowe informacje o śledzeniu procesów",
        userust: "Użyj alternatywnej funkcji opartej na Rust, aby sprawdzić, czy śledzone procesy gry są obecnie uruchomione na systemie. Gdy nie jest zaznaczone, zostanie użyta domyślna kontrola procesów oparta na NodeJS.",
        notifydebug: "Utwórz okno narzędzi deweloperskich dla wszystkich powiadomień. Przydatne do debugowania/problemów z powiadomieniami",
        usecustomfiles: "Włącza ładowanie niestandardowych plików przez powiadomienia. Ostrożność jest zalecana dla zwykłych użytkowników",
        showcustomfiles: "Otwórz lokalizację niestandardowych plików",
        log: "Otwórz okno dziennika aplikacji, które wyświetla informacje o działalności procesu, ostrzeżenia i błędy",
        reset: "Usuń wszystkie dane konfiguracyjne i uruchom aplikację ponownie",
        playback: "Wstrzymaj/wznów animację podglądu powiadomienia",
        replay: "Uruchom ponownie animację podglądu powiadomienia",
        preset: "Wybierz predefiniowany układ powiadomienia do dostosowania",
        iconanim: "Przełącz obramowanie i animację ikony Rzadkiego osiągnięcia",
        alldetails: "Wyświetl wszystkie elementy tekstowe w powiadomieniu, w tym te domyślnie ukryte dla tego predefiniowanego układu",
        usepercent: "Pokaż procent odblokowania osiągnięcia zamiast wartości XP/S",
        displaytime: "Ustaw liczbę sekund, przez które będzie wyświetlane powiadomienie",
        scale: "Zwiększ lub zmniejsz rozmiar powiadomienia",
        customtext: "Ustaw niestandardową wiadomość do wyświetlenia w powiadomieniu",
        usegametitle: "Wyświetl tytuł bieżącej gry w powiadomieniu",
        customfont: "Wczytaj niestandardową czcionkę do użycia w powiadomieniu",
        soundmode: "Wybierz pojedynczy plik dźwiękowy lub losowo wybrany plik dźwiękowy z folderu zawierającego wiele plików dźwiękowych, gdy wystąpi powiadomienie",
        soundfile: "Wybierz plik dźwiękowy do odtwarzania przy wystąpieniu powiadomienia",
        sounddir: "Wybierz folder, z którego zostanie losowo wybrany plik dźwiękowy przy wystąpieniu powiadomienia",
        volume: "Ustaw głośność odtwarzania pliku dźwiękowego",
        preview: "Podgląd wybranego pliku dźwiękowego lub pliku dźwiękowego losowo wybranego z folderu",
        bgstyle: "Wybierz styl tła powiadomienia",
        gradientangle: "Ustaw kąt gradientu",
        bgimg: "Wczytaj plik obrazu do użycia jako tło powiadomienia",
        bgimgbrightness: "Ustaw jasność obrazu używanego jako tło powiadomienia",
        brightness: "Ustaw jasność grafiki gry używanej jako tło powiadomienia",
        blur: "Ustaw poziom rozmycia stosowanego do tła powiadomienia",
        roundness: "Ustaw zaokrąglenie krawędzi powiadomienia",
        fontsize: "Ustaw rozmiar czcionki używanej w powiadomieniu",
        opacity: "Ustaw ogólną przezroczystość powiadomienia",
        bgonly: "Ustaw tylko przezroczystość tła powiadomienia, zachowując inne elementy w pełnej przezroczystości",
        glow: "Włącz efekt poświaty otaczający powiadomienie",
        glowcolor: "Ustaw kolor efektu poświaty",
        glowsize: "Ustaw rozmiar efektu poświaty",
        glowx: "Ustawienie przesunięcia poziomego efektu świetlnego",
        glowy: "Ustawienie przesunięcia pionowego efektu świetlnego",
        glowopacity: "Ustawienie przeźroczystości efektu świetlnego",
        glowanim: "Wybierz predefiniowaną animację do zastosowania do efektu poświaty",
        glowspeed: "Ustaw prędkość animacji stosowanej do efektu poświaty",
        mask: "Włącz maskowanie części powiadomienia za pomocą niestandardowego obrazu",
        maskimg: `Załaduj plik obrazu, który ma być używany jako maska<br><br><span class="ttdesc">W CSS, <code class="ttcode">mask-mode: alpha</code> działa w sposób przeciwny do oczekiwanego - obszary przezroczystości w pliku obrazu zostaną ukryte, a obszary czarne/szare pozwolą na widoczność elementów poniżej</span>`,
        primarycolor: "Ustaw główny kolor powiadomienia",
        secondarycolor: "Ustaw drugi kolor powiadomienia",
        tertiarycolor: "Ustaw trzeci kolor powiadomienia",
        fontcolor: "Ustaw kolor wszystkich tekstów wyświetlanych w powiadomieniu",
        fontoutline: "Dodaj obrys do wszystkich tekstów wyświetlanych w powiadomieniu",
        fontoutlinecolor: "Ustaw kolor obrysu tekstu",
        fontshadow: "Dodaj cień do wszystkich tekstów wyświetlanych w powiadomieniu",
        fontshadowcolor: "Ustaw kolor cienia tekstu",
        iconroundness: "Ustaw zaokrąglenie ikony osiągnięcia/gry wyświetlanej w powiadomieniu",
        plat: "Wczytaj plik obrazu do użycia jako ikona 100%",
        usegameicon: "Zastąp domyślną ikonę powiadomienia ikoną bieżącej gry",
        showhiddenicon: "Wyświetl obraz wskazujący, że osiągnięcie jest ukryte w powiadomieniu",
        hiddenicon: "Załaduj plik obrazu, aby zastąpić ukrytą ikonę osiągnięcia",
        logo: "Wczytaj plik obrazu, aby zastąpić ikonę Logo",
        decoration: "Wczytaj plik obrazu, aby zastąpić ikonę Dekoracji",
        showdecoration: "Przełącz widoczność ikony Dekoracji",
        replacelogo: "Zmień ikonę loga w powiadomieniu na wybraną dekorację",
        pos: "Ustaw pozycję powiadomienia na ekranie",
        usecustompos: "Włącz niestandardowe pozycjonowanie powiadomienia",
        setcustompos: "Ustaw niestandardową pozycję powiadomienia",
        resetcustompos: "Zresetuj pozycję powiadomienia do domyślnej niestandardowej pozycji",
        updatetheme: "Aktualizuj bieżący Motyw z wybranymi opcjami dostosowania",
        savetheme: "Zapisz wszystkie skonfigurowane opcje dostosowania jako nowy motyw",
        visibilitybtn: "Przełącz widoczność elementu w niestandardowych podglądach i testowych powiadomieniach",
        delbtn: "Zresetuj element do domyślnej wartości",
        link: `Otwórz <span class="hl">Menu Zarządzania Połączonymi Grami</span>`,
        imgpath: "Lokalizacja, w której będą przechowywane obrazy powiadomień generowane przez tę opcję",
        linkedgames: `Ominięcie <span class="hl">automatycznego śledzenia procesów</span> dla konkretnych gier na platformie Steam<br><br><span class="ttdesc">Ta opcja powinna być używana tylko w bardzo konkretnych scenariuszach. Użytkownicy nie powinni potrzebować jej w normalnych warunkach!</span>`,
        exclusionlist: `Zapobieganie śledzeniu osiągnięć w konkretnych grach na platformie Steam przez aplikację<br><br><span class="ttdesc">Ta opcja powinna być używana tylko w bardzo konkretnych scenariuszach. Użytkownicy nie powinni potrzebować jej w normalnych warunkach!</span>`,
        ovx: "Przesuń powiadomienie wyświetlane na zrzucie ekranu poziomo",
        ovy: "Przesuń powiadomienie wyświetlane na zrzucie ekranu pionowo",
        importtheme: `Importuj dostosowania za pomocą <span class="hl">pliku motywu</span> stworzonego przez użytkownika`,
        exporttheme: `Eksportuj aktualnie wybrany <span class="hl">motyw</span> w celu udostępnienia<br><br><span class="ttdesc">Przed próbą eksportu upewnij się, że wybrany <span class="hl">motyw</span> jest zaznaczony (za pomocą menu <span class="hl">Wybierz motyw</span>). Upewnij się również, że dostosowania zostały zapisane w wybranym <span class="hl">motywie</span> (za pomocą menu <span class="hl">Zapisz motyw</span>)<br><br><u>Wszelkie dostosowania niezapisane w bieżącym <span class="hl">motywie</span> nie zostaną wyeksportowane!</u></span>`        
    },
    update: {
        updateavailable: "Dostępna aktualizacja",
        sub: [
            `<span id="newversion"></span>`,
            "Dostępna jest nowa aktualizacja Steam Achievement Notifier!",
            `Pełne notatki wydania dostępne na <span id="discordreleasenotes"></span> i <span id="githubreleasenotes"></span>`
        ],
        update: "Aktualizuj"
    },
    linkgame: {
        content: {
            exepath: "Ścieżka do pliku wykonywalnego",
            managesub: [
                `Ręcznie połącz plik <span class="hl">wykonywalny</span> gry z określonym <span class="hl">AppID</span>, lub <span class="hl">rozłącz</span> istniejący`,
                `Steam Achievement Notifier nie będzie już używał <span class="hl">automatycznego śledzenia procesów</span> dla żadnej <span class="hl">połączonej gry</span> - zamiast tego określony <span class="hl">plik wykonywalny</span> będzie śledzony za każdym razem, gdy zostanie wykryte powiązane <span class="hl">AppID</span>`,
                `<span class="hl" id="appidhelp"><u>Jak znaleźć AppID gry Steam?</u></span>`
            ],
            linknew: "Nowa połączona gra",
            linknewsub: [
                `Utwórz nowe połączenie między <span class="hl">plikiem wykonywalnym gry</span>, a powiązanym <span class="hl">AppID</span>`,
                `Po utworzeniu połączenia można je <span class="hl">rozłączyć</span> za pomocą wcześniejszego okna dialogowego <span class="hl">Zarządzaj połączonymi grami</span>`
            ],
            link: "Połącz",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Dodaj <span class="hl">AppID</span> dowolnej gry na platformie Steam do <span class="hl">listy wyłączeń</span>`,
                `Steam Achievement Notifier nie będzie próbował śledzić danych dotyczących osiągnięć dla żadnej gry, której <span class="hl">AppID</span> zostało dodane do <span class="hl">listy wyłączeń</span>`,
                `<span class="hl" id="appidhelp"><u>Jak znaleźć AppID gry na platformie Steam?</u></span>`
            ],
            exclusionnew: "Nowe wyłączenie",
            exclusionnewsub: [
                `Wpisz <span class="hl">AppID</span>, aby dodać go do <span class="hl">listy wyłączeń</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Wygląda na to, że próbujesz włączyć opcję <span class="hl">${opt}</span>. Jednakże na systemach Linux nie można włączyć zrzutów ekranu bez wcześniejszej instalacji pakietu <code class="dialogcode">${dep}</code>`,
    `Proszę uruchomić <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code>, aby zainstalować tę zależność. Zapewni to możliwość robienia zrzutów ekranu na tym urządzeniu`
]