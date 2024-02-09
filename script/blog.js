import {createHeader} from "./modules/header.js";
import {createFooter} from "./modules/footer.js";
import {Breadcrumbs} from "./modules/breadcrumbs.js";
import {createMenu, handleMenu} from "./modules/menu.js"

// создание блога - верстка и fetch
const createBlog = () => {
  const main = document.createElement('main');
  const section = document.createElement('section');
  section.classList.add('previews');
  const div = document.createElement('div');
  div.classList.add('container');
  div.id = 'previews';
  const nav = document.createElement('nav');
  nav.classList.add('pagination');
  nav.id = 'pagination';

  // Добавляем элементы в DOM
  section.appendChild(div);
  main.appendChild(section);
  main.appendChild(nav);
  document.body.appendChild(main);

  const createPreview = (article) => {
    const preview = document.createElement('article');
    preview.classList.add('preview');

    const link = document.createElement('a');
    link.classList.add('preview__link');
    link.href = article.link;

    const image = document.createElement('img');
    image.classList.add('preview__image');
    image.src = article.image;
    image.alt = article.title;

    const title = document.createElement('h2');
    title.classList.add('preview__title');
    title.textContent = article.title;

    const info = document.createElement('div');
    info.classList.add('preview__info');

    const date = document.createElement('time');
    date.classList.add('preview__date');
    date.setAttribute('datetime', `${article.date} ${article.time}`);
    date.textContent = `${article.date}, ${article.time}`;

    const views = document.createElement('div');
    views.classList.add('preview__views');

    const viewsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    viewsIcon.setAttribute('width', '24');
    viewsIcon.setAttribute('height', '25');
    viewsIcon.setAttribute('viewBox', '0 0 24 25');
    viewsIcon.setAttribute('fill', 'none');
    viewsIcon.setAttribute('class', 'preview__views-icon');
    const viewsIconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    viewsIconPath1.setAttribute('d', 'M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z');

    viewsIconPath1.setAttribute('stroke', '#8F8F8F');
    viewsIconPath1.setAttribute('stroke-width', '2');
    viewsIconPath1.setAttribute('stroke-linecap', 'round');
    viewsIconPath1.setAttribute('stroke-linejoin', 'round');

    const viewsIconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    viewsIconPath2.setAttribute('d', 'M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z');
    viewsIconPath2.setAttribute('stroke', '#8F8F8F');
    viewsIconPath2.setAttribute('stroke-width', '2');
    viewsIconPath2.setAttribute('stroke-linecap', 'round');
    viewsIconPath2.setAttribute('stroke-linejoin', 'round');

    viewsIcon.appendChild(viewsIconPath1);
    viewsIcon.appendChild(viewsIconPath2);

    const viewsCount = document.createElement('span');
    viewsCount.classList.add('preview__views-count');
    viewsCount.textContent = article.views;

    views.appendChild(viewsIcon);
    views.appendChild(viewsCount);

    const comments = document.createElement('div');
    comments.classList.add('preview__comments');

    const commentsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    commentsIcon.setAttribute('width', '24');
    commentsIcon.setAttribute('height', '24');
    commentsIcon.setAttribute('viewBox', '0 0 24 24');
    commentsIcon.setAttribute('fill', 'none');
    commentsIcon.setAttribute('class', 'preview__comments-icon');

    const commentsIconG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    commentsIconG.setAttribute('clip-path', 'url(#clip0_1560_16)');

    const commentsIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    commentsIconPath.setAttribute('d', 'M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z');
    commentsIconPath.setAttribute('fill', '#8F8F8F');

    commentsIconG.appendChild(commentsIconPath);
    commentsIcon.appendChild(commentsIconG);

    const commentsCount = document.createElement('span');
    commentsCount.classList.add('preview__comments-count');
    commentsCount.textContent = article.comments;

    comments.appendChild(commentsIcon);
    comments.appendChild(commentsCount);

    info.appendChild(date);
    info.appendChild(views);
    info.appendChild(comments);

    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(info);

    preview.appendChild(link);

    return preview;
  }

// Функция для создания кнопки пагинации
  const createPaginationButton = (page, current, text) =>{
    const link = document.createElement('a');
    link.classList.add('pagination__button');
    link.href = `blog.html?page=${page}`;

    if (text === 'Назад') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '29');
      svg.setAttribute('height', '19');
      svg.setAttribute('viewBox', '0 0 29 19');
      svg.setAttribute('fill', 'none');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M28.375 7.95833H6.52958L12.0487 2.42375L9.875 0.25L0.625 9.5L9.875 18.75L12.0487 16.5762L6.52958 11.0417H28.375V7.95833Z');
      path.setAttribute('fill', '#8F8F8F');

      svg.appendChild(path);
      link.appendChild(svg);
    } else if (text === 'Вперед') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '29');
      svg.setAttribute('height', '19');
      svg.setAttribute('viewBox', '0 0 29 19');
      svg.setAttribute('fill', 'none');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M0.625 7.95833H22.4704L16.9513 2.42375L19.125 0.25L28.375 9.5L19.125 18.75L16.9513 16.5763L22.4704 11.0417H0.625V7.95833Z');
      path.setAttribute('fill', '#8F8F8F');

      svg.appendChild(path);
      link.appendChild(svg);
    } else {
      link.textContent = text || page;
      link.classList.add('pagination__link'); // Добавляем класс 'pagination__link' только для страниц пагинации
    }

    if (page === current) {
      link.classList.add('pagination__button--current');
      link.href = 'blog.html';
    }

    if (page === null) {
      link.classList.add('pagination__button--disabled');
      link.href = '#';
      link.addEventListener('click', event => event.preventDefault());
    }

    return link;
  }

// Функция для создания пагинации
  const createPagination = (pagination, currentPage) => {
    const paginationContainer = document.getElementById('pagination');

    const prevButton = createPaginationButton(currentPage - 1, currentPage, 'Назад');
    paginationContainer.appendChild(prevButton);

    let startPage = currentPage - 1;
    if (currentPage === 1) {
      startPage = currentPage;
    }

    for (let i = startPage; i <= startPage + 2; i++) {
      if (i >= 1 && i <= pagination.pages) {
        const pageButton = createPaginationButton(i, currentPage);
        paginationContainer.appendChild(pageButton);
      }
    }

    const nextButton = createPaginationButton(currentPage + 1, currentPage, 'Вперед');
    if (currentPage >= pagination.pages) {
      nextButton.classList.add('pagination__button--disabled');
      nextButton.href = '#';
      nextButton.addEventListener('click', event => event.preventDefault());
    }
    paginationContainer.appendChild(nextButton);
  }

// Функция для получения текущей страницы из URL
  const getCurrentPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('page')) || 1;
  }

// Получаем элементы, в которые будем добавлять превью и пагинацию
  const previewsContainer = document.getElementById('previews');
  const paginationContainer = document.getElementById('pagination');

// Получаем текущую страницу из URL
  const currentPage = getCurrentPage();

// Делаем GET-запрос к API для получения данных о статьях
  fetch(`https://gorest.co.in/public-api/posts?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      // Получаем массив статей и информацию о пагинации из ответа API
      const articles = data.data;
      const pagination = data.meta.pagination;

      // Создаем и добавляем превью для каждой статьи
      for (const article of articles) {
        const maxLength = 40;
        let shortTitle = article.title;

        if (article.title.length > maxLength) {
          shortTitle = article.title.substring(0, maxLength) + '...';
        }

        // Форматируем количество просмотров и комментариев
        const views = Math.floor(Math.random() * 1000);
        const formattedViews = views > 1000 ? (views / 1000).toFixed(1) + 'K' : views;
        const comments = Math.floor(Math.random() * 100);
        const formattedComments = comments > 1000 ? (comments / 1000).toFixed(1) + 'K' : comments;

        // Создаем объект с информацией о статье
        const articleData = {
          title: shortTitle,
          link: `article.html?id=${article.id}`,
          image: 'img/shoe-preview.png',
          date: '01 января 2022',
          time: '12:00',
          views: formattedViews,
          comments: formattedComments,
        };

        // Создаем и добавляем превью для статьи
        const preview = createPreview(articleData);
        previewsContainer.appendChild(preview);
      }

      // Создаем и добавляем пагинацию
      createPagination(pagination, currentPage);
    });
}


document.addEventListener('DOMContentLoaded',  () => {
  createHeader();

  const breadcrumbs = new Breadcrumbs();
  const mainElement = document.querySelector('main');
  document.body.insertBefore(breadcrumbs.render(), mainElement);

  createBlog();
  createFooter();
  createMenu();
  handleMenu();
});


