// const navBtn = document.querySelector('.nav-btn');
// const mobileNav = document.querySelector('.mobile-nav');
// const body = document.body;
// const header = document.querySelector('.header');

// // Функция переключения мобильного меню
// function toggleMobileNav(event) {
//     event.stopPropagation();
//     mobileNav.classList.toggle('mobile-nav-active');
//     navBtn.classList.toggle('nav-btn-close');
//     body.classList.toggle('no-scroll');
// }

// // Обработчик клика по кнопке
// navBtn.addEventListener('click', toggleMobileNav);

// // Обработчик клика вне мобильного меню
// window.addEventListener('click', (event) => {
//     if (body.classList.contains('no-scroll') && !mobileNav.contains(event.target)) {
//         toggleMobileNav(event);
//     }
// });

// // Обработчик прокрутки для статичного хедера
// window.addEventListener('scroll', () => {
//     header.classList.toggle('header--active', window.scrollY > 100);
// });
