const createMenu = () => {
  const header = document.querySelector('.header');

  // Создаем элементы
  let container = document.createElement('div');
  container.className = 'container header-menu';

  // Создаем элемент для крестика
  let close = document.createElement('div');
  close.className = 'header-menu__close';
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  close.appendChild(span1);
  close.appendChild(span2);
  container.appendChild(close);

  let headerMenu = document.createElement('div');
  headerMenu.className = 'header-menu__absolute';
  container.appendChild(headerMenu);

  let wrap = document.createElement('div');
  wrap.className = 'header-menu__wrap';
  headerMenu.appendChild(wrap);

  // Добавляем каталог
  let catalog = document.createElement('div');
  catalog.className = 'header-menu__catalog';
  wrap.appendChild(catalog);

  let catalogTitle = document.createElement('p');
  catalogTitle.className = 'header-menu__title';
  catalogTitle.textContent = 'Каталог';
  catalog.appendChild(catalogTitle);

  let catalogList = document.createElement('ul');
  catalogList.className = 'header-menu__list header-menu__list_grid';
  catalog.appendChild(catalogList);

  let catalogItems = [
    {name: 'Смартфоны', url: '#'},
    {name: 'Ноутбуки', url: '#'},
    {name: 'Ювелирные изделия', url: '#'},
    {name: 'Одежда', url: '#'},
    {name: 'Бытовая техника', url: '#'},
    {name: 'Книги и журналы', url: '#'},
    {name: 'Домашний текстиль', url: '#'},
    {name: 'Электроника', url: '#'},
    {name: 'Косметика', url: '#'},
  ];

  catalogItems.forEach(item => {
    let li = document.createElement('li');
    li.className = 'header-menu__item';
    let a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.name;
    li.appendChild(a);
    catalogList.appendChild(li);
  });

  // Добавляем политику
  let policy = document.createElement('div');
  policy.className = 'header-menu__policy';
  wrap.appendChild(policy);

  let policyTitle = document.createElement('p');
  policyTitle.className = 'header-menu__title';
  policyTitle.textContent = 'Покупателям';
  policy.appendChild(policyTitle);

  let policyList = document.createElement('ul');
  policyList.className = 'header-menu__list';
  policy.appendChild(policyList);

  let policyItems = [
    {name: 'Оплата заказа', url: '#'},
    {name: 'Условия доставки', url: '#'},
    {name: 'Условия возврата заказа', url: '#'},
    {name: 'Блог', url: 'blog.html'}
  ];

  policyItems.forEach(item => {
    let li = document.createElement('li');
    li.className = 'header-menu__item';
    let a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.name;
    li.appendChild(a);
    policyList.appendChild(li);
  });

  // Добавляем контакты
  let contacts = document.createElement('div');
  contacts.className = 'header-menu__contacts';
  wrap.appendChild(contacts);

  let contactsTitle = document.createElement('p');
  contactsTitle.className = 'header-menu__title';
  contactsTitle.textContent = 'Связаться с нами';
  contacts.appendChild(contactsTitle);

  let contactsList = document.createElement('ul');
  contactsList.className = 'header-menu__list';
  contacts.appendChild(contactsList);

  let contactsItem = document.createElement('li');
  contactsItem.className = 'header-menu__item';
  let a = document.createElement('a');
  a.href = '#';
  a.textContent = 'Контакты';
  contactsItem.appendChild(a);
  contactsList.appendChild(contactsItem);

  // Добавляем контейнер в header
  header.appendChild(container);
}

const handleMenu = () => {
  // Получаем элементы
  let gridHeaderMenu = document.querySelector('.grid-header__menu');
  let menuToggle = document.querySelector('.header-menu');
  let menuClose = document.querySelector('.header-menu__close');

  // Функция для переключения класса
  let toggleMenu = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    menuToggle.classList.toggle('header-menu__on');
    gridHeaderMenu.classList.toggle('clicked'); // Добавляем переключение иконки здесь
  }

  // Функция для закрытия меню при клике вне его
  let closeMenu = (event) => {
    if (!menuToggle.contains(event.target)) {
      toggleMenu(event); // Вызываем toggleMenu здесь
    }
  }

  // Функция для закрытия меню при клике на крестик
  let closeMenuOnClick = (event) => {
    event.stopPropagation();
    toggleMenu(event); // Вызываем toggleMenu здесь
  }

  // Добавляем обработчики событий
  gridHeaderMenu.addEventListener('click', toggleMenu);
  document.addEventListener('click', closeMenu);
  menuClose.addEventListener('click', closeMenuOnClick);
}


export {
  createMenu,
  handleMenu,
};
