const drumPads = document.querySelectorAll('.drum-pad');
const audios = {};

const drumSounds = {
  "7": "/resources/drumSounds/crash_left.mp3",
  "9": "/resources/drumSounds/crash_up_right.mp3",
  "4": "/resources/drumSounds/tom_up_left.mp3",
  "6": "/resources/drumSounds/tom_up_right.mp3",
  "5": "/resources/drumSounds/crash_down_right.mp3",
  "1": "/resources/drumSounds/tom_down_left.mp3",
  "2": "/resources/drumSounds/tom_down_center.mp3",
  "3": "/resources/drumSounds/tom_down_right.mp3",
  "8": "/resources/drumSounds/snare_drum.mp3",
  "0": "/resources/drumSounds/bass_drum.mp3"
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
