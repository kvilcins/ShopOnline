// создание блога - верстка и fetch

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

// Получаем элемент, в который будем добавлять превью
const previewsContainer = document.getElementById('previews');

// Делаем GET-запрос к API для получения данных о статьях
fetch('https://gorest.co.in/public-api/posts')
  .then(response => response.json())
  .then(data => {
    // Получаем массив статей из ответа API
    const articles = data.data;

    // Создаем и добавляем превью для каждой статьи
    for (const article of articles) {
      // Создаем объект с информацией о статье
      const articleData = {
        title: article.title,
        link: '#',
        image: 'styles/preview/img/shoe-preview.png',
        date: '01.01.2022',
        time: '12:00',
        views: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 100)
      };

      // Создаем и добавляем превью для статьи
      const preview = createPreview(articleData);
      previewsContainer.appendChild(preview);
    }
  });
