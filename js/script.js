
function preloadDrum() {
    bombo = new Audio('/resources/drumSounds/bombo.wav');
    crash = new Audio('/resources/drumSounds/crash.wav');
    hihat = new Audio('/resources/drumSounds/hit-hat.wav');
    redob = new Audio('/resources/drumSounds/redoblante.wav');
    tom1 = new Audio('/resources/drumSounds/tom1.wav');
    tom2 = new Audio('/resources/drumSounds/tom2.wav');
    tom3 = new Audio('/resources/drumSounds/tom3.wav');
    tom4 = new Audio('/resources/drumSounds/tom4.wav');
    }

function preloadKeyboard() {
    do1 = new Audio('resources/keyboardSounds/do.ogg');
    do2 = new Audio('/resources/keyboardSounds/do2.ogg');
    re1 = new Audio('/resources/keyboardSounds/re.ogg');
    re2 = new Audio('/resources/keyboardSounds/re2.ogg');
    mi1 = new Audio('/resources/keyboardSounds/mi.ogg');
    mi2 = new Audio('/resources/keyboardSounds/mi2.ogg');
    fa1 = new Audio('/resources/keyboardSounds/fa.ogg');
    fa2 = new Audio('/resources/keyboardSounds/fa2.ogg');
    sol1 = new Audio('/resources/keyboardSounds/sol.ogg');
    sol2 = new Audio('/resources/keyboardSounds/sol2.ogg');
    la1 = new Audio('/resources/keyboardSounds/la.ogg');
    la2 = new Audio('/resources/keyboardSounds/la2.ogg');
    si1 = new Audio('/resources/keyboardSounds/si.ogg');
    si2 = new Audio('/resources/keyboardSounds/si2.ogg');
    random = new Audio('/resources/keyboardSounds/quack.mp3');
    }

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const note = document.querySelector(`[note="${key}"]`);

    if (note) {
       note.classList.add("active"); // Agrega una clase para resaltar visualmente la tecla presionada
        switch (key) {
            case "a":
            do1.play();
                        break;
                    case "w":
                        mi2.play();
                        break;
                    case "s":
                        re1.play();
                        break;
                    case "e":
                        fa2.play();
                        break;
                    case "d":
                        mi1.play();
                        break;
                    case "r":
                        sol2.play();
                        break;
                    case "f":
                        fa1.play();
                        break;
                    case "t":
                        la2.play();
                        break;
                    case "g":
                        sol1.play();
                        break;
                    case "y":
                        si2.play();
                        break;
                    case "h":
                        la1.play();
                        break;
                    case "u":
                        do1.play();
                        break;
                    case "j":
                        si1.play();
                        break;
                    case "i":
                        re1.play();
                        break;
                    case "k":
                        do2.play();
                        break;
                    case "o":
                        random.play();
                        break;
                    case "l":
                        re2.play();
                        break;
                    default:
                        break;
                }
            }
        });

        // Evento de tecla liberada
        document.addEventListener("keyup", (event) => {
            const key = event.key.toLowerCase();
            const note = document.querySelector(`[note="${key}"]`);

            if (note) {
                note.classList.remove("active");
            }
        });

        // Cargar los sonidos al iniciar la página
        preloadDrum();
        preloadKeyboard();