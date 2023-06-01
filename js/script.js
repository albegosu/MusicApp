
const keyboardSounds = {
    "do1": new Audio("resources/keyboardSounds/do.ogg"),
    "do2": new Audio('/resources/keyboardSounds/do2.ogg'),
    "re1": new Audio('/resources/keyboardSounds/re.ogg'),
    "re2": new Audio('/resources/keyboardSounds/re2.ogg'),
    "mi1": new Audio('/resources/keyboardSounds/mi.ogg'),
    'mi2': new Audio('/resources/keyboardSounds/mi2.ogg'),
    'fa1': new Audio('/resources/keyboardSounds/fa.ogg'),
    'fa2': new Audio('/resources/keyboardSounds/fa2.ogg'), 
    'sol1': new Audio('/resources/keyboardSounds/sol.ogg'),
    'sol2': new Audio('/resources/keyboardSounds/sol2.ogg'),
    'la1': new Audio('/resources/keyboardSounds/la.ogg'),
    'la2': new Audio('/resources/keyboardSounds/la2.ogg'),
    'si1': new Audio('/resources/keyboardSounds/si.ogg'),
    'si2': new Audio('/resources/keyboardSounds/si2.ogg'),
    'random': new Audio('/resources/keyboardSounds/quack.mp3'),
}


const whiteKeys = document.querySelectorAll('.whiteKey');
const blackKeys = document.querySelectorAll('.blackKey');

whiteKeys.forEach(whiteKey => {
    whiteKey.addEventListener('mousedown', playSound);
    whiteKey.addEventListener('mouseup', stopSound);
    whiteKey.addEventListener('mouseleave', stopSound);
});

blackKeys.forEach(blackKey => {
    blackKey.addEventListener('mousedown', playSound);
    blackKey.addEventListener('mouseup', stopSound);
    blackKey.addEventListener('mouseleave', stopSound);
});

function playSound(event) {
    const note = event.target.dataset.note;
    sounds[note].currentTime = 0;
    sounds[note].play();
}

// Detiene la reproducción del sonido al soltar la tecla
function stopSound(event) {
    const note = event.target.dataset.note;
    sounds[note].pause();
    sounds[note].currentTime = 0;
}






/*
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
*/


/*let bombo, crash, hihat, redob, tom1, tom2, tom3, tom4;
bombo = 2;
console.log(bombo);
let do1, do2, re1, re2, mi1, mi2, fa1, fa2, sol1, sol2, la1, la2, si1, si2, random;

*/