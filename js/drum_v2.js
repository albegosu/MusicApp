const drumElements = document.querySelectorAll(".img_container > div");

const audioFiles = {
  "crash_up_left": "/resources/drumSounds/crash.wav",
  "crash_up_right": "/resources/drumSounds/crash.wav",
  "tom_up_left": "/resources/drumSounds/tom4.wav",
  "tom_up_right": "/resources/drumSounds/tom4.wav",
  "hithat": "/resources/drumSounds/hit-hat.wav",
  "tom_down_left": "/resources/drumSounds/tom1.wav",
  "tom_down_center": "/resources/drumSounds/tom2.wav",
  "tom_down_right": "/resources/drumSounds/tom3.wav",
  "snare_drum": "/resources/drumSounds/redoblante.wav",
  "bass_drum": "/resources/drumSounds/bombo.wav"
};

const audioElements = Object.fromEntries(
  Object.entries(audioFiles).map(([key, file]) => [key, new Audio(file)])
);

const getDrumKeyFromEvent = key => {
  const keyMap = {
    "a": "tom_up_left",
    "s": "tom_up_right",
    "d": "tom_down_left",
    "f": "tom_down_center",
    "g": "tom_down_right",
    "q": "snare_drum",
    "w": "crash_up_left",
    "e": "bass_drum",
    "r": "crash_up_right",
    "t": "hithat"
  };
  return keyMap[key] || null;
};

const makeSound = drumKey => {
  const audio = audioElements[drumKey];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
};

drumElements.forEach(drumElement => {
  drumElement.addEventListener("click", () => {
    const drumKey = drumElement.classList[1];
    makeSound(drumKey);
    drumElement.classList.add("clicked");
    setTimeout(() => {
      drumElement.classList.remove("clicked");
    }, 100);
  });
});

document.addEventListener("keydown", event => {
  const drumKey = getDrumKeyFromEvent(event.key);
  if (drumKey) {
    makeSound(drumKey);
    const drumElement = document.querySelector("." + drumKey);
    drumElement.classList.add("pressed");
    setTimeout(() => {
      drumElement.classList.remove("pressed");
    }, 100);
  }
});


