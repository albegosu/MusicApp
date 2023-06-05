const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar__menu');

hamburger.addEventListener('click', function() {
  navbar.classList.toggle('active');
});