const burger = document.querySelector('.promo__burger')
	  menu = document.querySelector('.menu')
	  closeElem = document.querySelector('.menu__close')
	  overlay = document.querySelector('.menu__overlay');

burger.addEventListener('click', () => {
	menu.classList.add('menu__active')
})

function closeMenu (i) {
    i.addEventListener('click', () => {
        menu.classList.remove('menu__active')
    });
}

closeMenu(closeElem);
closeMenu(overlay);

const swiper = new Swiper('.services__slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 75,
	centeredSlides: true,
	centeredSlidesBounds: false,
	speed: 700,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });