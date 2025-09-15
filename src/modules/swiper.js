const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 'auto',

	breakpoints: {
		768: {
			toggle: false,
			spaceBetween: 'auto',
			slidesPerView: 'auto',
			centeredSlides: false,
		},
	},
});
