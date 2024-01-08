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
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	centeredSlidesBounds: false,
	speed: 700,
	keyboard: {
		enabled: true,
	},
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	//Media
	breakpoints: {
		// when window width is >= 320px
		320: {
			navigation: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: false,
			},
		},
		// when window width is >= 769px
		769: {
			pagination: {
				clickable: true,
			},
		},
		// when window width is >= 993px
		993: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		1211: {
			// Optional parameters
			slidesPerView: 3,
			spaceBetween: 71,
		}
	  }
  });