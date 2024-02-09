const createHeader = () => {
  const body = document.querySelector('body');

  // Создание элемента header
  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'container header__wrap grid-header';
  header.appendChild(container);

  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const basePath = isLocal ? "" : "/ShopOnline";
  const shopLink = document.createElement('a');
  shopLink.href = `${basePath}/index.html`;
  shopLink.className = 'header__link grid-header__link';
  shopLink.innerHTML = 'Shop<span class="grid-header__span">Online</span>';
  container.appendChild(shopLink);


  const menuButton = document.createElement('button');
  menuButton.className = 'header__link grid-header__menu';
  menuButton.textContent = 'Меню';
  container.appendChild(menuButton);

  const form = document.createElement('form');
  form.action = 'https://jsonplaceholder.typicode.com/posts';
  form.method = 'POST';
  form.className = 'grid-header__search form';
  container.appendChild(form);

  const input = document.createElement('input');
  input.name = 'search';
  input.placeholder = 'Я ищу...';
  input.type = 'search';
  input.className = 'form__input';
  form.appendChild(input);

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'form__button';
  form.appendChild(button);

  const accountDiv = document.createElement('div');
  accountDiv.className = 'grid-header__account account';
  container.appendChild(accountDiv);

  const ul = document.createElement('ul');
  ul.className = 'account__list';
  accountDiv.appendChild(ul);

  const profileLi = document.createElement('li');
  profileLi.className = 'account__item account__item_profile';
  profileLi.textContent = 'Профиль';
  ul.appendChild(profileLi);

  const cartLi = document.createElement('li');
  cartLi.className = 'account__item account__item_cart';
  cartLi.textContent = 'Корзина';
  ul.appendChild(cartLi);

  const favoriteLi = document.createElement('li');
  favoriteLi.className = 'account__item account__item_favorite';
  favoriteLi.textContent = 'Избранное';
  ul.appendChild(favoriteLi);

  // Добавление header в body
  body.prepend(header);
}

export {
  createHeader,
};
