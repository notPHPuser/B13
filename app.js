function GoToService() {
  const services = document.querySelector('.title_we_do');
  services.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  const mainPhoto = document.querySelector('.mainPhoto');
  mainPhoto.classList.add('show');
});

let currentIndex = 0;
const images = document.querySelectorAll('.img_about');

function showNextImage() {
  images[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.add('active');
}

images[currentIndex].classList.add('active');

setInterval(showNextImage, 3000);
