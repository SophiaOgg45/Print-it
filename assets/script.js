const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  let currentIndex = 0;
  
  // Fonction pour mettre à jour le carrousel
  function updateCarousel() {
	let currentSlide = slides[currentIndex];
  
	// Mettre à jour l'image
	let bannerImg = document.querySelector('.banner-img');
	bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  
	// Mettre à jour le texte
	let tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = currentSlide.tagLine;
  
	// Mettre à jour le point actif
	let dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
	  if (index === currentIndex) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  // Ajout des Event listeners sur les flèches
  let flecheGauche = document.querySelector(".arrow_left");
  let flecheDroite = document.querySelector(".arrow_right");
  
  flecheGauche.addEventListener("click", function () {
	currentIndex--;
	if (currentIndex < 0) {
	  currentIndex = slides.length - 1;
	}
	updateCarousel();
  });
  
  flecheDroite.addEventListener("click", function () {
	currentIndex++;
	if (currentIndex >= slides.length) {
	  currentIndex = 0;
	}
	updateCarousel();
  });
  
  // Ajout des bullet points
  let dots = document.querySelector('.dots');
  
  for (let compteur = 0; compteur < slides.length; compteur++) {
	let dot = document.createElement('div');
	dot.classList.add('dot');
  
	if (compteur === 0) {
	  dot.classList.add('dot_selected');
	}
  
	dot.addEventListener('click', function () {
	  currentIndex = compteur;
	  updateCarousel();
	});
  
	dots.appendChild(dot);
  }
  
  // Initialiser le carrousel
  updateCarousel();
  


