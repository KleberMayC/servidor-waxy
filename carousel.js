var currentImage = 1;
var totalImages = 3;

function nextImage() {
  if (currentImage === totalImages) {
    currentImage = 1;
  } else {
    currentImage++;
  }
  displayImage();
}

function prevImage() {
  if (currentImage === 1) {
    currentImage = totalImages;
  } else {
    currentImage--;
  }
  displayImage();
}

function displayImage() {
  document.getElementById("image" + currentImage).style.display = "block";
  for (var i = 1; i <= totalImages; i++) {
    if (i !== currentImage) {
      document.getElementById("image" + i).style.display = "none";
    }
  }
}

displayImage();
