class Breadcrumbs {
  constructor() {
    this.title = document.title;
  }

  // createSeparator() {
  //   const separator = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  //   separator.setAttribute('width', '18');
  //   separator.setAttribute('height', '18');
  //   separator.setAttribute('viewBox', '0 0 18 18');
  //   separator.setAttribute('fill', 'none');
  //
  //   const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  //   g.setAttribute('clip-path', 'url(#clip0_1822_1518)');
  //
  //   const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  //   path.setAttribute('d', 'M6.44238 12.4425L9.87738 9L6.44238 5.5575L7.49988 4.5L11.9999 9L7.49988 13.5L6.44238 12.4425Z');
  //   path.setAttribute('fill', '#525252');
  //
  //   g.appendChild(path);
  //   separator.appendChild(g);
  //
  //   return separator;
  // }

  render() {
    // Создаем элементы
    const breadcrumbs = document.createElement('nav');
    const list = document.createElement('ul');
    const home = document.createElement('li');
    const blog = document.createElement('li');
    const currentPage = document.createElement('li');

    // Создаем контейнер
    const container = document.createElement('div');
    container.className = 'container';
    breadcrumbs.appendChild(container);

    // Добавляем классы по БЭМ
    breadcrumbs.className = 'breadcrumbs';
    list.className = 'breadcrumbs__list';
    home.className = 'breadcrumbs__item';
    blog.className = 'breadcrumbs__item';
    currentPage.className = 'breadcrumbs__item';

    // Создаем ссылки для 'Главная' и 'Блог'
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const basePath = isLocal ? "" : "/ShopOnline";
    const homeLink = document.createElement('a');
    homeLink.href = `${basePath}/index.html`;
    homeLink.textContent = 'Главная';
    home.appendChild(homeLink);

    const blogLink = document.createElement('a');
    blogLink.textContent = 'Блог';
    blog.appendChild(blogLink);

    let blogPath;
    if (isLocal) {
      blogPath = '/index.html/blog.html';
    } else {
      blogPath = `${basePath}/blog.html`;
    }

    // Если мы находимся на странице блога, делаем ссылку на блог неактивной
    if (this.title !== 'ShopOnline - Blog') {
      blogLink.href = blogPath;
    } else {
      // Не добавляем последний элемент, если мы находимся на странице блога
      list.appendChild(home);
      // list.appendChild(this.createSeparator());
      list.appendChild(blog);
      container.appendChild(list);
      return breadcrumbs;
    }

    // Проверяем title перед его выводом
    if (this.title !== 'ShopOnline - Blog') {
      currentPage.textContent = this.title;
    }

    // Собираем хлебные крошки
    list.appendChild(home);
    // list.appendChild(this.createSeparator());
    list.appendChild(blog);
    // list.appendChild(this.createSeparator());
    list.appendChild(currentPage);
    container.appendChild(list);

    return breadcrumbs;
  }
}

export {Breadcrumbs};
