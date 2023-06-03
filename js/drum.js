const drumPads = document.querySelectorAll('.drum-pad');
const audios = {};

const drumSounds = {
  "7": "/resources/drumSounds/crash.wav",
  "9": "/resources/drumSounds/crash.wav",
  "4": "/resources/drumSounds/tom1.wav",
  "6": "/resources/drumSounds/tom2.wav",
  "5": "/resources/drumSounds/tom3.wav",
  "1": "/resources/drumSounds/tom4.wav",
  "2": "/resources/drumSounds/redob.wav",
  "3": "/resources/drumSounds/redob.wav",
  "8": "/resources/drumSounds/bombo.wav",
  "0": "/resources/drumSounds/hit-hat.wav3"
};

drumPads.forEach(function(drumPad) {
  drumPad.addEventListener("mousedown", function() {
    const key = drumPad.getAttribute("data-key");
    playSound(key);
  });

  drumPad.addEventListener("mouseup", function() {
    const key = drumPad.getAttribute("data-key");
    resetPadEffects(key);
  });
});

for (const key in drumSounds) {
  if (drumSounds.hasOwnProperty(key)) {
    const audio = new Audio(drumSounds[key]);
    audios[key] = audio;
  }
}

const playSound = (key) => {
  let sound = getAudio(key);
  sound.currentTime = 0;
  sound.play();
  applyPadEffects(key);
};

const getAudio = (key) => {
  return audios[key];
};

const applyPadEffects = (key) => {
  let padElement = getPadElement(key);
  padElement.classList.add("active");
};

const resetPadEffects = (key) => {
  let padElement = getPadElement(key);
  padElement.classList.remove("active");
};

const getPadElement = (key) => {
  return document.querySelector(`.drum-pad[data-key="${key}"]`);
};
