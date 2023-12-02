import {createHeader} from "./modules/header.js";
import {createFooter} from "./modules/footer.js";
import {runTimer} from "./modules/timer.js";

// Стрелочная функция для создания верстки
const createMarkup = () => {
  // Создаем основные элементы
  const main = document.createElement('main');
  const bannersSection = document.createElement('section');
  const container = document.createElement('div');
  const bannersWrap = document.createElement('div');

  // Добавляем классы к элементам
  bannersSection.className = 'banners';
  container.className = 'container';
  bannersWrap.className = 'banners-wrap grid';

  // Создаем массив с данными для каждого баннера
  const bannerData = [
    { class: 'grid__item_laptop', descMain: '-50% на все ноутбуки', descEndingTitle: 'До конца акции:', deadline: '2023-07-04T00:00:00+03:00' },
    { class: 'grid__item_book', descBook: 'Книга – лучший подарок' },
    { class: 'grid__item_sales', descSales: 'Время скидок!' },
    { class: 'grid__item_shoes', descShoes: 'Вторая пара кроссовок', shoesSpan: 'в подарок!' },
    { class: 'grid__item_christmas-gifts', descGifts: 'Идеи новогодних подарков' },
    { class: 'grid__item_red-shoe', redShoe: true },
    { class: 'grid__item_december', descDecember: 'Выгодно в декабре!' },
    { class: 'grid__item_christmas-decoration', descChristmasDecoration: 'Новогодние украшения' },
    { class: 'grid__item_red-dress', redDress: true },
    { class: 'grid__item_cleaning', descCleaning: 'На бытовую химию' },
    { class: 'grid__item_red-christmas', redChristmas: true },
  ];

  // Итерируем по массиву и создаем элементы для каждого баннера
  bannerData.forEach(data => {
    const gridItem = document.createElement('div');
    gridItem.className = `grid__item ${data.class} grid-item-wrap`;

    if (data.descMain) {
      const descMain = document.createElement('p');
      descMain.className = 'grid-item-wrap__desc grid-item-wrap__desc_main';
      descMain.textContent = data.descMain;
      gridItem.appendChild(descMain);

      const descEnding = document.createElement('div');
      descEnding.className = 'grid-item-wrap__desc grid-item-wrap__desc_ending description-ending';

      const descEndingTitle = document.createElement('p');
      descEndingTitle.className = 'description-ending__title';
      descEndingTitle.textContent = data.descEndingTitle;

      const date = document.createElement('div');
      date.className = 'description-ending__date date';
      date.id = 'timer1';
      date.setAttribute('data-timer-deadline', data.deadline);

      descEnding.appendChild(descEndingTitle);
      descEnding.appendChild(date);
      gridItem.appendChild(descEnding);
    } else if (data.descBook) {
      const descBook = document.createElement('p');
      descBook.className = 'grid-item-wrap__desc grid-item-wrap__desc_book';
      const spanBook = document.createElement('span');
      spanBook.className = 'grid-item-wrap__book-span';
      spanBook.textContent = 'Книга';
      descBook.innerHTML = `${spanBook.outerHTML} – лучший подарок`;
      gridItem.appendChild(descBook);
    } else if (data.descSales) {
      const descSales = document.createElement('p');
      descSales.className = 'grid-item-wrap__desc grid-item-wrap__desc_sales';
      descSales.textContent = 'Время скидок!';
      gridItem.appendChild(descSales);
    } else if (data.descShoes) {
      const descShoes = document.createElement('p');
      descShoes.className = 'grid-item-wrap__desc grid-item-wrap__desc_shoes';
      const spanShoes = document.createElement('span');
      spanShoes.className = 'grid-item-wrap__shoes-span';
      spanShoes.textContent = 'в подарок!';
      descShoes.innerHTML = `Вторая пара кроссовок ${spanShoes.outerHTML}`;
      gridItem.appendChild(descShoes);
    } else if (data.descGifts) {
      const descGifts = document.createElement('p');
      descGifts.className = 'grid-item-wrap__desc grid-item-wrap__desc_gifts';
      descGifts.textContent = 'Идеи новогодних подарков';
      gridItem.appendChild(descGifts);
    } else if (data.redShoe) {
      const redShoe = document.createElement('div');
      redShoe.className = 'grid-item-wrap__red-shoe';
      gridItem.appendChild(redShoe);
    } else if (data.descDecember) {
      const descDecember = document.createElement('p');
      descDecember.className = 'grid-item-wrap__desc grid-item-wrap__desc_december';
      descDecember.textContent = 'Выгодно в декабре!';
      gridItem.appendChild(descDecember);
    } else if (data.descChristmasDecoration) {
      const descChristmasDecoration = document.createElement('p');
      descChristmasDecoration.className = 'grid-item-wrap__desc grid-item-wrap__desc_christmas-decoration';
      descChristmasDecoration.textContent = 'Новогодние украшения';
      gridItem.appendChild(descChristmasDecoration);
    } else if (data.redDress) {
      const redDress = document.createElement('div');
      redDress.className = 'grid-item-wrap__red-dress';
      gridItem.appendChild(redDress);
    } else if (data.descCleaning) {
      const descCleaning = document.createElement('p');
      descCleaning.className = 'grid-item-wrap__desc grid-item-wrap__desc_cleaning';
      descCleaning.textContent = 'На бытовую химию';
      gridItem.appendChild(descCleaning);
    } else if (data.redChristmas) {
      const redChristmas = document.createElement('div');
      redChristmas.className = 'grid-item-wrap__red-christmas';
      gridItem.appendChild(redChristmas);
    }

    bannersWrap.appendChild(gridItem);
  });

  // Собираем структуру
  container.appendChild(bannersWrap);
  bannersSection.appendChild(container);
  main.appendChild(bannersSection);

  document.body.appendChild(main);
};

document.addEventListener('DOMContentLoaded', () => {
  createHeader();
  createMarkup();
  runTimer();
  createFooter();
});

