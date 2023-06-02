let keys = document.querySelectorAll('.keyZone > .group > div');
let audios = {};

const keyZone = {
    "KeyA": "c2",
    "KeyS": "d2",
    "KeyD": "e2",
    "KeyF": "f2",
    "KeyG": "g2",
    "KeyH": "a2",
    "KeyJ": "b2",
    "KeyW": "C2",
    "KeyE": "D2",
    "KeyT": "F2",
    "KeyY": "G2",
    "KeyU": "A2",
    "KeyO": "C3",
    "KeyP": "D3",
    "KeyK": "c3",
    "KeyL": "d3",
    "KeyM": "e3"
};

//suena al presionar la tecla
document.addEventListener("keydown", (e) => {
    if (keyZone.hasOwnProperty(e.code)) {
        playSound(keyZone[e.code]);
    }
});

//efecto visual al soltar la tecla
document.addEventListener("keyup", (e) => {
    if (keyZone.hasOwnProperty(e.code)) {
        resetKeyEffects(keyZone[e.code]);
    }
});

keys.forEach(function(key){
    key.addEventListener("mousedown",(e)=>{
        let key = e.target;
        playSound(key.getAttribute("key"));
    });

    key.addEventListener("mouseup", (e) => {
        let key = e.target;
        resetKeyEffects(key.getAttribute("key"));
    });
});

const loadAudios = () => {
const audioFiles = {
    "c2": "audios/do.mp3",
    "d2": "audios/re.mp3",
    "e2": "audios/mi.mp3",
    "f2": "audios/fa.mp3",
    "g2": "audios/sol.mp3",
    "a2": "audios/la.mp3",
    "b2": "audios/si.mp3",
    "C2": "audios/do1.mp3",
    "D2": "audios/re2.mp3",
    "F2": "audios/mi2.mp3",
    "G2": "audios/fa2.mp3",
    "A2": "audios/sol2.mp3",
    "C3": "audios/la2.mp3",
    "D3": "audios/si2.mp3",
    "c3": "audios/do3.mp3",
    "d3": "audios/re3.mp3",
    "e3": "audios/mi3.mp3"
};

for (const key in audioFiles) {
    if (audioFiles.hasOwnProperty(key)) {
    const audio = new Audio(audioFiles[key]);
    audios[key] = audio;
    }
  }
};

const playSound = (key) => {
    let sound = getAudio(key);
    sound.currentTime = 0;
    sound.play();
    applyKeyEffects(key);
};

const getAudio = (key) =>{
    return audios[key];
};

const applyKeyEffects = (key) => {
    let keyElement = getKeyElement(key);
    keyElement.style.transform = "translateY(-2px) scale(0.97)";
};

const resetKeyEffects = (key) => {
    let keyElement = getKeyElement(key);
    keyElement.style.transform = "translateY(0) scale(1)";
};

const getKeyElement = (key) => {
    let keyElements = document.querySelectorAll('.keyZone > .group > div');
    for (let i = 0; i < keyElements.length; i++) {
        if (keyElements[i].getAttribute("key") === key) {
            return keyElements[i];
        }
    }
};
loadAudios();

