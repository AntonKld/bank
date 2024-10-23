// Burger-menu
let navMenu = document.querySelector('.main');
let navToggle = document.querySelector('.main__button');

navMenu.classList.remove('main--nojs');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('main--closed')) {
    navMenu.classList.remove('main--closed');
    navMenu.classList.add('main--open');
  } else {
    navMenu.classList.add('main--closed');
    navMenu.classList.remove('main--open');
  }
});

// profile
// Получаем все вкладки и их контент
const tabs = document.querySelectorAll('.profile__tab');
const contents = document.querySelectorAll('.tab-content');

// Перебираем все вкладки и добавляем обработчик события на клик
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    // Убираем активный класс со всех вкладок
    tabs.forEach(tabItem => tabItem.classList.remove('active'));

    // Убираем класс активного контента у всех блоков контента
    contents.forEach(contentItem => contentItem.classList.remove('active-content'));

    // Добавляем активный класс к нажатой вкладке
    this.classList.add('active');

    // Показываем соответствующий контент, связанный с этой вкладкой
    const contentId = this.id.replace('tab', 'content');
    document.getElementById(contentId).classList.add('active-content');
  });
});
