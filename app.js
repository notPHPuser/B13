function GoToService() {
  const services = document.querySelector('.title_we_do');
  services.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  const mainPhoto = document.querySelector('.mainPhoto');
  mainPhoto.classList.add('show');
});
