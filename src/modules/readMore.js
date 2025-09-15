document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('.content__read');
	const buttonText = document.querySelector('.show-btn');
	const text2 = document.querySelector('.content__text--2');
	const text3 = document.querySelector('.content__text--3');
	const text4 = document.querySelector('.content__text--4');

	let isExpanded = false;

	button.addEventListener('click', function () {
		if (isExpanded) {
			const width = window.innerWidth;
			if (width < 768) {
				text2.style.display = 'none';
				text3.style.display = 'none';
				text4.style.display = 'none';
			} else if (width >= 768 && width < 1440) {
				text3.style.display = 'none';
				text4.style.display = 'none';
			} else {
				text2.style.display = 'none';
				text4.style.display = 'none';
			}
			buttonText.textContent = 'Читать далее';
		} else {
			text2.style.display = 'none';
			text3.style.display = 'block';
			text4.style.display = 'block';
			buttonText.textContent = 'Свернуть';
		}

		isExpanded = !isExpanded;
	});
});

// Стрелка

const readBtn = document.querySelector('.content__read');
const arrow = readBtn.querySelector('.show-btn__arrow');

readBtn.addEventListener('click', readMore);

function readMore(event) {
	arrow.classList.toggle('show__arrow--up');
}
