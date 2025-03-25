console.log("Ingeniando Podcast cargado correctamente");

// Manejo simple del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. ¡Nos pondremos en contacto contigo pronto!");
});

// Funcionalidad del Slider
let slideIndex = 0;
const slidesContainer = document.querySelector('.slider .slides');
const slides = document.querySelectorAll('.slider .slide');
const prevBtn = document.querySelector('.slider .prev');
const nextBtn = document.querySelector('.slider .next');

function showSlide(index) {
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  slidesContainer.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', function() {
    slideIndex--;
    showSlide(slideIndex);
  });
  nextBtn.addEventListener('click', function() {
    slideIndex++;
    showSlide(slideIndex);
  });
}

// Auto-slide cada 5 segundos
setInterval(function() {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// Reproductor de Audio Personalizado
const audioPlayer = document.querySelector('.custom-audio audio');
const playBtn = document.querySelector('.custom-audio .play');
const pauseBtn = document.querySelector('.custom-audio .pause');

if (audioPlayer && playBtn && pauseBtn) {
  playBtn.addEventListener('click', function() {
    audioPlayer.play();
  });
  pauseBtn.addEventListener('click', function() {
    audioPlayer.pause();
  });
}
