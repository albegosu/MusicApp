//Drum sounds
let bombo, crash, hihat, redob, tom1, tom2, tom3, tom4;

//Keyboard sounds
let do1, do2, re1, re2, mi1, mi2, fa1, fa2, sol1, sol2, la1, la2, si1, si2;

//cargamos los sonidos 
function preloadDrum(){
    bombo = loadSound('/resources/drumSounds/bombo.wav');
    crash = loadSound('/resources/drumSounds/crash.wav');
    hihat = loadSound('/resources/drumSounds/hit-hat.wav');
    redob = loadSound('/resources/drumSounds/redoblante.wav');
    tom1 = loadSound('/resources/drumSounds/tom1.wav');
    tom2 = loadSound('/resources/drumSounds/tom2.wav');
    tom3 = loadSound('/resources/drumSounds/tom3.wav');
    tom4 = loadSound('/resources/drumSounds/tom4.wav');
    }

function preloadKeyboard(){
    do1 = loadSound('/resources/keyboardSounds/do.ogg');
    do2 = loadSound('/resources/keyboardSounds/do2.ogg');
    re1 = loadSound('/resources/keyboardSounds/re.ogg');
    re2 = loadSound('/resources/keyboardSounds/re2.ogg');
    mi1 = loadSound('/resources/keyboardSounds/mi.ogg');
    mi2 = loadSound('/resources/keyboardSounds/mi2.ogg');
    fa1 = loadSound('/resources/keyboardSounds/fa.ogg');
    fa2 = loadSound('/resources/keyboardSounds/fa2.ogg');
    sol1 = loadSound('/resources/keyboardSounds/sol.ogg');
    sol2 = loadSound('/resources/keyboardSounds/sol2.ogg');
    la1 = loadSound('/resources/keyboardSounds/la.ogg');
    la2 = loadSound('/resources/keyboardSounds/la2.ogg');
    si1 = loadSound('/resources/keyboardSounds/si.ogg');
    si2 = loadSound('/resources/keyboardSounds/si2.ogg');
}

/*function keyPressed() {
    if (key === 'a' || key === 'A') {
      bombo.play(); // Reproduce el sonido de bombo
    }*/