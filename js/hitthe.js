
const drumContainer = document.querySelector('.drum_container');
const pianoContainer = document.querySelector('.piano_container');
const drumText = drumContainer.querySelector('p');
const pianoText = pianoContainer.querySelector('p');

drumContainer.addEventListener('mouseenter', () => {
  drumText.classList.add('musicEffect');
});

drumContainer.addEventListener('mouseleave', () => {
  drumText.classList.remove('musicEffect');
});

pianoContainer.addEventListener('mouseenter', () => {
  pianoText.classList.add('musicEffect');
});

pianoContainer.addEventListener('mouseleave', () => {
  pianoText.classList.remove('musicEffect');
});


