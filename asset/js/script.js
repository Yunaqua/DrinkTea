let slideIndex = 0; // Commence par le premier groupe de boissons

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("boisson-carrousel");
  // Cache tous les slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Affiche uniquement les slides du groupe actuel
  for (i = 0; i < 3; i++) {
    let index = i + slideIndex * 3;
    if (index < slides.length) { // Vérifie si l'indice est dans la plage
      slides[index].style.display = "block";
    }
  }
}

function changeSlide(n) {
  let totalSlides = document.getElementsByClassName("boisson-carrousel").length;
  let totalGroups = Math.ceil(totalSlides / 3); // Nombre total de groupes de slides
  slideIndex += n;
  if (slideIndex >= totalGroups) { // Boucle au début si dépasse le nombre total
    slideIndex = 0;
  } else if (slideIndex < 0) { // Boucle à la fin si inférieur à 0
    slideIndex = totalGroups - 1;
  }
  showSlides();
}

// Initialisation
document.addEventListener('DOMContentLoaded', (event) => {
  showSlides(); // Affiche le premier groupe de boissons au chargement
});
