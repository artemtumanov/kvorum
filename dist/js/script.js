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