
let slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
let carousel =document.querySelector('.carosello')

for (let i = 0; i <slides.length; i++) {
	//creo un div 
	let slide = document.createElement('div');
	slide.classList.add('slide');
	// se è la prima immagine inserisco activ come classe 
	if (i === 0) {
		slide.classList.add('active');
	}
	//inserisco un tag img con dentro le img dell array 
	let image = document.createElement('img');
	image.src = slides[i];
	slide.appendChild(image);
	carousel.appendChild(slide);
}



let indiceSlideAttiva = 0
const slideElements = document.getElementsByClassName('slide')
// console.log(slideElements)

const rightBtnElement = document.querySelector('.carosello__arrow.arrow-right')
const leftBtnElement = document.querySelector('.carosello__arrow.arrow-left')

// console.log(rightBtnElement)

rightBtnElement.addEventListener('click', function () {
// console.log('current slide', indiceSlideAttiva)
	if (indiceSlideAttiva < slides.length - 1) { 
		let slideCorrente = slideElements[indiceSlideAttiva]
		// togliendo la classe active
		slideCorrente.classList.remove('active')
		// inremento l'indice
		indiceSlideAttiva += 1
		let prossimaSlide = slideElements[indiceSlideAttiva]
		// aggiungiamo la classe active alla seconda slide
		prossimaSlide.classList.add('active')
		// console.log('next slide', indiceSlideAttiva)
	}
})

leftBtnElement.addEventListener('click', function () {
	// console.log('current slide', indiceSlideAttiva)
	if (indiceSlideAttiva >0) {
		let slideCorrente = slideElements[indiceSlideAttiva]
		// togliendo la classe active
		slideCorrente.classList.remove('active')
		// decremento l'indice
		indiceSlideAttiva -= 1
		let prossimaSlide = slideElements[indiceSlideAttiva]
		// aggiungiamo la classe active alla seconda slide
		prossimaSlide.classList.add('active')
		// console.log('next slide', indiceSlideAttiva)
	}
})
