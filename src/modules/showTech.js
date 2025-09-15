const repairTech = document.querySelector('.repair-tech');
const showTech = repairTech.querySelector('.show');
const techList = repairTech.querySelector('.tech__list');
const arrowUp2 = repairTech.querySelector('.show__arrow');

// Раскрытие списка
showTech.addEventListener('click', showAllTech);

function showAllTech(event) {
	techList.classList.toggle('tech__list--full');
	arrowUp2.classList.toggle('show__arrow--up');
}

// Показать/скрыть - текст кнопки
showTech.addEventListener('click', textBtn2);

function textBtn2(event) {
	showTech.classList.toggle('show__btn--active');
}
