/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {

	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (window.innerWidth < 767.98 && document.querySelector('.about__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const swiper = new Swiper('.about__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 0,
			spaceBetween: 10,
			speed: 800,
			loop: true,
			loopedSlides: 3,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			touchRatio: 1,
			simulateTouch: true,


			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.about__button-prev ',
				nextEl: '.about__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				359.98: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoWeight: true,
				},
				539.98: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 10,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			// Події
			on: {

			}
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});

