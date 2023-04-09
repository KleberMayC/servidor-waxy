const carouselImages = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function changeImage() {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 2000);
