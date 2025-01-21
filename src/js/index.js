// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 5,
	loop: true,

	breakpoints: {
		450: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		780: {
			slidesPerView: 3,
			spaceBetween: 24,
		}
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//галлерея follow


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Аккордеон для мобильной навигации
import accordion from './modules/accordion.js';
accordion();


