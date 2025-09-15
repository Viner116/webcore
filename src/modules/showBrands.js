const repairBrands = document.querySelector('.repair-brands');
const showBrands = repairBrands.querySelector('.show-btn');
const brandsList = repairBrands.querySelector('.brands__list');
const arrowUp = repairBrands.querySelector('.show-btn__arrow');

// Раскрытие списка
showBrands.addEventListener('click', showAllBrands);

function showAllBrands(event) {
	brandsList.classList.toggle('brands__list--full');
	arrowUp.classList.toggle('show-btn__arrow--up');
}

// Показать/скрыть - текст кнопки
showBrands.addEventListener('click', textBtn);

function textBtn(event) {
	showBrands.classList.toggle('show-btn--active');
}
