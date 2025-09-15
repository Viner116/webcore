const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu-burger');
const modalBack = document.querySelector('.burger-back');

const closeBtn = document.querySelector('.close');

document.addEventListener('click', openMenu);

function openMenu(event) {
	if (event.target.closest('.burger')) {
		menuBurger.classList.add('menu-burger--visible');
		modalBack.classList.add('burger-back--active');
	}
	if (event.target.closest('.burger-back')) {
		menuBurger.classList.remove('menu-burger--visible');
		modalBack.classList.remove('burger-back--active');
	}
}
closeBtn.addEventListener('click', closeMenu);

function closeMenu(event) {
	if (event.target.closest('.close')) {
		menuBurger.classList.remove('menu-burger--visible');
		modalBack.classList.remove('burger-back--active');
	}
}
