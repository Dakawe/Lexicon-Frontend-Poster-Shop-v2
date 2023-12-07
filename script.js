let allImages = document.querySelectorAll(".img-poster");
imgCounter = 1;
allImages.forEach(function (i) {
  i.src = `assets/char-${imgCounter++}.png`;
});
