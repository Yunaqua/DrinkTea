let slideIndex = 0; // Commence par le premier groupe de boissons

showSlidesB(slideIndex);
showSlidesA(slideIndex);

function moveSlide(n) {
  showSlidesB(slideIndex += n);
  showSlidesA(slideIndex += n);
}

function showSlidesB(n) {
  let i;
  let slides = document.getElementsByClassName("boisson");  //let slides = document.getElementsByClassName("boisson");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function showSlidesA(n) {
    let i;
    let slides = document.getElementsByClassName("avisposter");  //let slides = document.getElementsByClassName("boisson");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }
 
// Lorsque l'utilisateur fait défiler la page de 20px vers le bas, affiche le bouton   ("avisposter", "boisson")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, fait défiler vers le haut de la page de manière fluide
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}