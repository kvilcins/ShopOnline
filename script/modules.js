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
    const homeLink = document.createElement('a');
    homeLink.href = '/index.html';
    homeLink.textContent = 'Главная';
    home.appendChild(homeLink);

    const blogLink = document.createElement('a');
    blogLink.textContent = 'Блог';
    blog.appendChild(blogLink);

    // Если мы находимся на странице блога, делаем ссылку на блог неактивной
    if (this.title !== 'ShopOnline - Blog') {
      blogLink.href = '/index.html/blog.html';
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
const createFooter = () => {
  const body = document.querySelector('body');

  // Создание элемента footer
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const container = document.createElement('div');
  container.className = 'container';
  footer.appendChild(container);

  const footerInfo = document.createElement('section');
  footerInfo.className = 'footer-info';
  container.appendChild(footerInfo);

  let logo = `<svg width="188" height="31" viewBox="0 0 188 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-info__logo">
          <path d="M14.3369 17.0527C14.3369 18.3223 14.0293 19.4258 13.4141 20.3633C12.7988 21.3008 11.9004 22.0234 10.7188 22.5312C9.54688 23.0391 8.12109 23.293 6.44141 23.293C5.69922 23.293 4.97168 23.2441 4.25879 23.1465C3.55566 23.0488 2.87695 22.9072 2.22266 22.7217C1.57812 22.5264 0.962891 22.2871 0.376953 22.0039V17.7852C1.39258 18.2344 2.44727 18.6396 3.54102 19.001C4.63477 19.3623 5.71875 19.543 6.79297 19.543C7.53516 19.543 8.13086 19.4453 8.58008 19.25C9.03906 19.0547 9.37109 18.7861 9.57617 18.4443C9.78125 18.1025 9.88379 17.7119 9.88379 17.2725C9.88379 16.7354 9.70312 16.2764 9.3418 15.8955C8.98047 15.5146 8.48242 15.1582 7.84766 14.8262C7.22266 14.4941 6.51465 14.1377 5.72363 13.7568C5.22559 13.5225 4.68359 13.2393 4.09766 12.9072C3.51172 12.5654 2.95508 12.1504 2.42773 11.6621C1.90039 11.1738 1.46582 10.583 1.12402 9.88965C0.791992 9.18652 0.625977 8.34668 0.625977 7.37012C0.625977 6.09082 0.918945 4.99707 1.50488 4.08887C2.09082 3.18066 2.92578 2.4873 4.00977 2.00879C5.10352 1.52051 6.39258 1.27637 7.87695 1.27637C8.99023 1.27637 10.0498 1.4082 11.0557 1.67188C12.0713 1.92578 13.1309 2.29688 14.2344 2.78516L12.7695 6.31543C11.7832 5.91504 10.8994 5.60742 10.1182 5.39258C9.33691 5.16797 8.54102 5.05566 7.73047 5.05566C7.16406 5.05566 6.68066 5.14844 6.28027 5.33398C5.87988 5.50977 5.57715 5.76367 5.37207 6.0957C5.16699 6.41797 5.06445 6.79395 5.06445 7.22363C5.06445 7.73145 5.21094 8.16113 5.50391 8.5127C5.80664 8.85449 6.25586 9.18652 6.85156 9.50879C7.45703 9.83105 8.20898 10.207 9.10742 10.6367C10.2012 11.1543 11.1338 11.6963 11.9053 12.2627C12.6865 12.8193 13.2871 13.4785 13.707 14.2402C14.127 14.9922 14.3369 15.9297 14.3369 17.0527ZM24.135 0.207031V4.85059C24.135 5.66113 24.1057 6.43262 24.0471 7.16504C23.9982 7.89746 23.9592 8.41504 23.9299 8.71777H24.1643C24.5158 8.15137 24.9309 7.69238 25.4094 7.34082C25.8977 6.98926 26.4348 6.73047 27.0207 6.56445C27.6066 6.39844 28.2365 6.31543 28.9104 6.31543C30.092 6.31543 31.1223 6.52539 32.0012 6.94531C32.8801 7.35547 33.5637 8.00488 34.052 8.89355C34.5402 9.77246 34.7844 10.915 34.7844 12.3213V23H30.3166V13.4346C30.3166 12.2627 30.1018 11.3789 29.6721 10.7832C29.2424 10.1875 28.5783 9.88965 27.6799 9.88965C26.7814 9.88965 26.0734 10.0996 25.5559 10.5195C25.0383 10.9297 24.6721 11.54 24.4572 12.3506C24.2424 13.1514 24.135 14.1328 24.135 15.2949V23H19.6672V0.207031H24.135ZM56.0668 14.7822C56.0668 16.1494 55.8812 17.3604 55.5102 18.415C55.1488 19.4697 54.6166 20.3633 53.9135 21.0957C53.2201 21.8184 52.3803 22.3652 51.3939 22.7363C50.4174 23.1074 49.3139 23.293 48.0834 23.293C46.9311 23.293 45.8715 23.1074 44.9047 22.7363C43.9477 22.3652 43.1127 21.8184 42.3998 21.0957C41.6967 20.3633 41.1498 19.4697 40.7592 18.415C40.3783 17.3604 40.1879 16.1494 40.1879 14.7822C40.1879 12.9658 40.5102 11.4277 41.1547 10.168C41.7992 8.9082 42.7172 7.95117 43.9086 7.29688C45.1 6.64258 46.5209 6.31543 48.1713 6.31543C49.7045 6.31543 51.0619 6.64258 52.2436 7.29688C53.435 7.95117 54.3676 8.9082 55.0414 10.168C55.725 11.4277 56.0668 12.9658 56.0668 14.7822ZM44.7436 14.7822C44.7436 15.8564 44.8607 16.7598 45.0951 17.4922C45.3295 18.2246 45.6957 18.7764 46.1937 19.1475C46.6918 19.5186 47.3412 19.7041 48.142 19.7041C48.933 19.7041 49.5727 19.5186 50.0609 19.1475C50.559 18.7764 50.9203 18.2246 51.1449 17.4922C51.3793 16.7598 51.4965 15.8564 51.4965 14.7822C51.4965 13.6982 51.3793 12.7998 51.1449 12.0869C50.9203 11.3643 50.559 10.8223 50.0609 10.4609C49.5629 10.0996 48.9135 9.91895 48.1127 9.91895C46.9311 9.91895 46.0717 10.3242 45.5346 11.1348C45.0072 11.9453 44.7436 13.1611 44.7436 14.7822ZM70.6695 6.31543C72.5152 6.31543 74.0045 7.0332 75.1373 8.46875C76.2799 9.9043 76.8512 12.0088 76.8512 14.7822C76.8512 16.6377 76.5826 18.2002 76.0455 19.4697C75.5084 20.7295 74.7662 21.6816 73.8189 22.3262C72.8717 22.9707 71.7828 23.293 70.5523 23.293C69.7613 23.293 69.0826 23.1953 68.5162 23C67.9498 22.7949 67.4664 22.5361 67.066 22.2236C66.6656 21.9014 66.3189 21.5596 66.026 21.1982H65.7916C65.8697 21.5889 65.9283 21.9893 65.9674 22.3994C66.0064 22.8096 66.026 23.21 66.026 23.6006V30.207H61.5582V6.62305H65.191L65.8209 8.74707H66.026C66.3189 8.30762 66.6754 7.90234 67.0953 7.53125C67.5152 7.16016 68.0182 6.86719 68.6041 6.65234C69.1998 6.42773 69.8883 6.31543 70.6695 6.31543ZM69.234 9.88965C68.4527 9.88965 67.8326 10.0508 67.3736 10.373C66.9146 10.6953 66.5777 11.1787 66.3629 11.8232C66.1578 12.4678 66.0455 13.2832 66.026 14.2695V14.7529C66.026 15.8076 66.1236 16.7012 66.3189 17.4336C66.524 18.166 66.8609 18.7227 67.3297 19.1035C67.8082 19.4844 68.4625 19.6748 69.2926 19.6748C69.9762 19.6748 70.5377 19.4844 70.9771 19.1035C71.4166 18.7227 71.7438 18.166 71.9586 17.4336C72.1832 16.6914 72.2955 15.7881 72.2955 14.7236C72.2955 13.1221 72.0465 11.916 71.5484 11.1055C71.0504 10.2949 70.2789 9.88965 69.234 9.88965Z" fill="white"/>
          <path d="M102.133 12.2627C102.133 13.9131 101.928 15.417 101.517 16.7744C101.107 18.1221 100.482 19.2842 99.6424 20.2607C98.8123 21.2373 97.7576 21.9893 96.4783 22.5166C95.199 23.0342 93.6853 23.293 91.9373 23.293C90.1893 23.293 88.6756 23.0342 87.3963 22.5166C86.117 21.9893 85.0574 21.2373 84.2176 20.2607C83.3875 19.2842 82.7674 18.1172 82.3572 16.7598C81.9471 15.4023 81.742 13.8936 81.742 12.2334C81.742 10.0166 82.1033 8.08789 82.826 6.44727C83.5584 4.79687 84.6814 3.51758 86.1951 2.60938C87.7088 1.70117 89.6326 1.24707 91.9666 1.24707C94.2908 1.24707 96.2 1.70117 97.6941 2.60938C99.198 3.51758 100.311 4.79687 101.034 6.44727C101.766 8.09766 102.133 10.0361 102.133 12.2627ZM86.5027 12.2627C86.5027 13.7568 86.6883 15.0459 87.0594 16.1299C87.4402 17.2041 88.0311 18.0342 88.8318 18.6201C89.6326 19.1963 90.6678 19.4844 91.9373 19.4844C93.2264 19.4844 94.2713 19.1963 95.0721 18.6201C95.8728 18.0342 96.4539 17.2041 96.8152 16.1299C97.1863 15.0459 97.3719 13.7568 97.3719 12.2627C97.3719 10.0166 96.952 8.24902 96.1121 6.95996C95.2723 5.6709 93.8904 5.02637 91.9666 5.02637C90.6873 5.02637 89.6424 5.31934 88.8318 5.90527C88.0311 6.48145 87.4402 7.31152 87.0594 8.39551C86.6883 9.46973 86.5027 10.7588 86.5027 12.2627ZM117.321 6.31543C119.069 6.31543 120.476 6.79395 121.54 7.75098C122.604 8.69824 123.137 10.2217 123.137 12.3213V23H118.669V13.4346C118.669 12.2627 118.454 11.3789 118.024 10.7832C117.604 10.1875 116.94 9.88965 116.032 9.88965C114.665 9.88965 113.732 10.3535 113.234 11.2812C112.736 12.209 112.487 13.5469 112.487 15.2949V23H108.02V6.62305H111.433L112.033 8.71777H112.282C112.634 8.15137 113.068 7.69238 113.586 7.34082C114.113 6.98926 114.694 6.73047 115.329 6.56445C115.974 6.39844 116.638 6.31543 117.321 6.31543ZM134.004 23H129.536V0.207031H134.004V23ZM144.974 6.62305V23H140.506V6.62305H144.974ZM142.747 0.207031C143.412 0.207031 143.983 0.363281 144.461 0.675781C144.94 0.978516 145.179 1.5498 145.179 2.38965C145.179 3.21973 144.94 3.7959 144.461 4.11816C143.983 4.43066 143.412 4.58691 142.747 4.58691C142.074 4.58691 141.497 4.43066 141.019 4.11816C140.55 3.7959 140.316 3.21973 140.316 2.38965C140.316 1.5498 140.55 0.978516 141.019 0.675781C141.497 0.363281 142.074 0.207031 142.747 0.207031ZM160.778 6.31543C162.526 6.31543 163.932 6.79395 164.997 7.75098C166.061 8.69824 166.593 10.2217 166.593 12.3213V23H162.126V13.4346C162.126 12.2627 161.911 11.3789 161.481 10.7832C161.061 10.1875 160.397 9.88965 159.489 9.88965C158.122 9.88965 157.189 10.3535 156.691 11.2812C156.193 12.209 155.944 13.5469 155.944 15.2949V23H151.476V6.62305H154.889L155.49 8.71777H155.739C156.09 8.15137 156.525 7.69238 157.043 7.34082C157.57 6.98926 158.151 6.73047 158.786 6.56445C159.43 6.39844 160.094 6.31543 160.778 6.31543ZM179.746 6.31543C181.26 6.31543 182.563 6.6084 183.657 7.19434C184.751 7.77051 185.596 8.61035 186.191 9.71387C186.787 10.8174 187.085 12.165 187.085 13.7568V15.9248H176.523C176.572 17.1846 176.948 18.1758 177.651 18.8984C178.364 19.6113 179.35 19.9678 180.61 19.9678C181.655 19.9678 182.612 19.8604 183.481 19.6455C184.35 19.4307 185.244 19.1084 186.162 18.6787V22.1357C185.351 22.5361 184.502 22.8291 183.613 23.0146C182.734 23.2002 181.665 23.293 180.405 23.293C178.764 23.293 177.309 22.9902 176.04 22.3848C174.78 21.7793 173.789 20.8564 173.066 19.6162C172.353 18.376 171.997 16.8135 171.997 14.9287C171.997 13.0146 172.319 11.4229 172.964 10.1533C173.618 8.87402 174.526 7.91699 175.688 7.28223C176.85 6.6377 178.203 6.31543 179.746 6.31543ZM179.775 9.49414C178.906 9.49414 178.183 9.77246 177.607 10.3291C177.041 10.8857 176.714 11.7598 176.626 12.9512H182.895C182.886 12.2871 182.763 11.6963 182.529 11.1787C182.304 10.6611 181.963 10.251 181.504 9.94824C181.054 9.64551 180.478 9.49414 179.775 9.49414Z" fill="#3670C7"/>
        </svg>`
  footerInfo.innerHTML = logo;

  const footerWrap = document.createElement('div');
  footerWrap.className = 'footer-info__wrapper footer-wrap';
  footerInfo.appendChild(footerWrap);

  // Создание каталога
  const footerCatalog = document.createElement('div');
  footerCatalog.className = 'footer-wrap__catalog footer-catalog';
  footerWrap.appendChild(footerCatalog);

  const catalogTitle = document.createElement('p');
  catalogTitle.className = 'footer-catalog__detail footer-catalog__detail_title';
  catalogTitle.textContent = 'Каталог';
  footerCatalog.appendChild(catalogTitle);

  const catalogList = document.createElement('ul');
  catalogList.className = 'footer-catalog__detail footer-list';
  footerCatalog.appendChild(catalogList);

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
    li.className = 'footer-list__item';
    let a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.name;
    li.appendChild(a);
    catalogList.appendChild(li);
  });

  // Создание политики
  const footerPolicy = document.createElement('div');
  footerPolicy.className = 'footer-wrap__policy footer-policy';
  footerWrap.appendChild(footerPolicy);

  const policyTitle = document.createElement('p');
  policyTitle.className = 'footer-policy__detail footer-policy__detail_title';
  policyTitle.textContent = 'Покупателям';
  footerPolicy.appendChild(policyTitle);

  const policyList = document.createElement('ul');
  policyList.className = 'footer-policy__detail policy-list';
  footerPolicy.appendChild(policyList);

  let policyItems = [
    {name: 'Оплата заказа', url: '#'},
    {name: 'Условия доставки', url: '#'},
    {name: 'Условия возврата заказа', url: '#'},
    {name: 'Блог', url: 'blog.html'}
  ];

  policyItems.forEach(item => {
    let li = document.createElement('li');
    li.className = 'policy-list__item';
    let a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.name;
    li.appendChild(a);
    policyList.appendChild(li);
  });

  // Создание контактов
  const footerContacts = document.createElement('div');
  footerContacts.className = 'footer-wrap__contacts footer-contacts';
  footerWrap.appendChild(footerContacts);

  const contactsTitle = document.createElement('p');
  contactsTitle.className = 'footer-contacts__detail footer-contacts__detail_title';
  contactsTitle.textContent = 'Контакты';
  footerContacts.appendChild(contactsTitle);

  const contactsWrapper = document.createElement('div');
  contactsWrapper.className = 'footer-contacts__detail contacts-wrapper';
  footerContacts.appendChild(contactsWrapper);

  const phoneDetail = document.createElement('p');
  phoneDetail.className = 'contacts-wrapper__detail contacts-wrapper__detail_phone';
  phoneDetail.innerHTML = 'Тел: <a href="tel:+79378392361">+7 937 839 23-61</a>';
  contactsWrapper.appendChild(phoneDetail);

  const emailDetail = document.createElement('p');
  emailDetail.className = 'contacts-wrapper__detail contacts-wrapper__detail_email';
  emailDetail.innerHTML = 'Email: <a href="mailto:OnlineShop@gmail.com">OnlineShop@gmail.com</a>';
  contactsWrapper.appendChild(emailDetail);

  const socialsList = document.createElement('ul');
  socialsList.className = 'contacts-wrapper__detail socials';
  contactsWrapper.appendChild(socialsList);

  // Создание элементов списка социальных сетей
  const socialItem1 = document.createElement('li');
  socialItem1.className = 'socials__item';
  const a1 = document.createElement('a');
  a1.href = '#';
  let viberIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.1161 15.2318C17.8393 15.0896 16.4606 14.4143 16.2042 14.3229C15.9477 14.2264 15.7599 14.1807 15.5745 14.465C15.3866 14.7469 14.8534 15.374 14.6858 15.5645C14.5233 15.7523 14.3583 15.7752 14.0815 15.6355C12.4362 14.8129 11.3571 14.168 10.2729 12.3068C9.98603 11.8117 10.5599 11.8473 11.0956 10.7783C11.187 10.5904 11.1413 10.4305 11.0702 10.2883C10.9991 10.1461 10.4405 8.76992 10.2069 8.20879C9.98096 7.66289 9.74736 7.73906 9.57724 7.72891C9.41475 7.71875 9.22939 7.71875 9.0415 7.71875C8.85361 7.71875 8.55146 7.78984 8.29502 8.0666C8.03857 8.34844 7.31494 9.02637 7.31494 10.4025C7.31494 11.7787 8.31787 13.1117 8.45498 13.2996C8.59717 13.4875 10.4278 16.3109 13.2386 17.5271C15.0159 18.2939 15.7116 18.36 16.6003 18.2279C17.1411 18.1467 18.2558 17.5525 18.4868 16.8949C18.7179 16.2398 18.7179 15.6787 18.6493 15.5619C18.5808 15.4375 18.3929 15.3664 18.1161 15.2318Z" fill="white"/>
                      <path d="M23.4915 8.59219C22.9177 7.22871 22.0951 6.00488 21.0464 4.95371C19.9978 3.90508 18.774 3.07988 17.408 2.50859C16.0115 1.92207 14.5287 1.625 13.0001 1.625H12.9494C11.4107 1.63262 9.92026 1.9373 8.5187 2.53652C7.16538 3.11543 5.95171 3.93809 4.91323 4.98672C3.87475 6.03535 3.05971 7.2541 2.49604 8.6125C1.91206 10.0191 1.61753 11.5146 1.62514 13.0533C1.63276 14.8154 2.05425 16.5648 2.84389 18.1289V21.9883C2.84389 22.6332 3.36694 23.1562 4.01186 23.1562H7.87378C9.43784 23.9459 11.1873 24.3674 12.9494 24.375H13.0027C14.5236 24.375 15.9988 24.0805 17.3876 23.5041C18.746 22.9379 19.9673 22.1254 21.0134 21.0869C22.0621 20.0484 22.8873 18.8348 23.4636 17.4814C24.0628 16.0799 24.3675 14.5895 24.3751 13.0508C24.3828 11.5045 24.0832 10.0039 23.4915 8.59219ZM19.655 19.7133C17.8751 21.4754 15.5138 22.4453 13.0001 22.4453H12.957C11.4259 22.4377 9.90503 22.0568 8.56186 21.3408L8.34858 21.2266H4.77358V17.6516L4.65932 17.4383C3.94331 16.0951 3.56245 14.5742 3.55483 13.0432C3.54468 10.5117 4.51206 8.13516 6.28686 6.34512C8.05913 4.55508 10.4281 3.56484 12.9595 3.55469H13.0027C14.2722 3.55469 15.5037 3.80098 16.664 4.28848C17.7964 4.76328 18.8121 5.44629 19.6855 6.31973C20.5564 7.19062 21.2419 8.20879 21.7167 9.34121C22.2093 10.5143 22.4556 11.7584 22.4505 13.0432C22.4353 15.5721 21.4425 17.941 19.655 19.7133Z" fill="white"/>
                    </svg>`;
  a1.innerHTML = viberIcon;
  socialItem1.appendChild(a1);
  socialsList.appendChild(socialItem1);

  const socialItem2 = document.createElement('li');
  socialItem2.className = 'socials__item';
  const a2 = document.createElement('a');
  a2.href = '#';
  let instaIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2C10.0149 2 9.6395 2.01375 8.46663 2.066C7.29375 2.121 6.49487 2.30525 5.795 2.5775C5.06088 2.85363 4.39593 3.28676 3.84663 3.84663C3.2871 4.39621 2.85402 5.06108 2.5775 5.795C2.30525 6.4935 2.11963 7.29375 2.066 8.4625C2.01375 9.63812 2 10.0121 2 13.0014C2 15.9879 2.01375 16.3619 2.066 17.5347C2.121 18.7063 2.30525 19.5051 2.5775 20.205C2.85938 20.9282 3.23475 21.5415 3.84663 22.1534C4.45713 22.7652 5.07037 23.142 5.79363 23.4225C6.49487 23.6947 7.29238 23.8804 8.46388 23.934C9.63813 23.9862 10.0121 24 13 24C15.9879 24 16.3605 23.9862 17.5347 23.934C18.7049 23.879 19.5065 23.6947 20.2064 23.4225C20.94 23.1462 21.6045 22.7131 22.1534 22.1534C22.7652 21.5415 23.1406 20.9282 23.4225 20.205C23.6934 19.5051 23.879 18.7063 23.934 17.5347C23.9862 16.3619 24 15.9879 24 13C24 10.0121 23.9862 9.63813 23.934 8.46388C23.879 7.29375 23.6934 6.4935 23.4225 5.795C23.146 5.06106 22.7129 4.39618 22.1534 3.84663C21.6042 3.28655 20.9392 2.85339 20.205 2.5775C19.5037 2.30525 18.7035 2.11963 17.5334 2.066C16.3591 2.01375 15.9865 2 12.9973 2H13.0014H13ZM12.0141 3.98275H13.0014C15.9384 3.98275 16.2863 3.99238 17.4454 4.046C18.5179 4.09413 19.1009 4.27425 19.4886 4.42412C20.0015 4.6235 20.3686 4.86275 20.7536 5.24775C21.1386 5.63275 21.3765 5.9985 21.5759 6.51275C21.7271 6.89913 21.9059 7.48213 21.954 8.55463C22.0076 9.71375 22.0186 10.0616 22.0186 12.9973C22.0186 15.9329 22.0076 16.2821 21.954 17.4412C21.9059 18.5138 21.7257 19.0954 21.5759 19.4831C21.3995 19.9607 21.118 20.3926 20.7522 20.7467C20.3672 21.1318 20.0015 21.3696 19.4873 21.569C19.1023 21.7203 18.5192 21.899 17.4454 21.9485C16.2863 22.0007 15.9384 22.0131 13.0014 22.0131C10.0644 22.0131 9.71513 22.0007 8.556 21.9485C7.4835 21.899 6.90188 21.7203 6.51412 21.569C6.03631 21.3929 5.60405 21.1119 5.24913 20.7467C4.88303 20.392 4.60112 19.9598 4.42412 19.4818C4.27425 19.0954 4.09413 18.5124 4.046 17.4399C3.99375 16.2808 3.98275 15.9329 3.98275 12.9945C3.98275 10.0575 3.99375 9.711 4.046 8.55187C4.0955 7.47937 4.27425 6.89638 4.4255 6.50863C4.62488 5.99575 4.86412 5.62862 5.24913 5.24362C5.63412 4.85862 5.99988 4.62075 6.51412 4.42138C6.90188 4.27013 7.4835 4.09138 8.556 4.04188C9.57075 3.99513 9.964 3.98138 12.0141 3.98V3.98275ZM18.8726 5.80875C18.6993 5.80875 18.5276 5.84289 18.3675 5.90923C18.2073 5.97557 18.0618 6.0728 17.9392 6.19537C17.8167 6.31794 17.7194 6.46346 17.6531 6.62361C17.5868 6.78376 17.5526 6.95541 17.5526 7.12875C17.5526 7.30209 17.5868 7.47374 17.6531 7.63389C17.7194 7.79404 17.8167 7.93956 17.9392 8.06213C18.0618 8.1847 18.2073 8.28193 18.3675 8.34827C18.5276 8.41461 18.6993 8.44875 18.8726 8.44875C19.2227 8.44875 19.5585 8.30968 19.806 8.06213C20.0536 7.81458 20.1926 7.47884 20.1926 7.12875C20.1926 6.77866 20.0536 6.44292 19.806 6.19537C19.5585 5.94782 19.2227 5.80875 18.8726 5.80875ZM13.0014 7.3515C12.2521 7.33981 11.508 7.47729 10.8123 7.75594C10.1167 8.0346 9.48346 8.44885 8.94946 8.97458C8.41546 9.50032 7.99138 10.127 7.70191 10.8182C7.41244 11.5094 7.26336 12.2513 7.26336 13.0007C7.26336 13.7501 7.41244 14.4919 7.70191 15.1831C7.99138 15.8743 8.41546 16.5011 8.94946 17.0268C9.48346 17.5525 10.1167 17.9668 10.8123 18.2454C11.508 18.5241 12.2521 18.6616 13.0014 18.6499C14.4844 18.6267 15.8988 18.0214 16.9393 16.9645C17.9799 15.9076 18.5631 14.4839 18.5631 13.0007C18.5631 11.5175 17.9799 10.0938 16.9393 9.03691C15.8988 7.97999 14.4844 7.37464 13.0014 7.3515ZM13.0014 9.33288C13.974 9.33288 14.9067 9.71923 15.5944 10.407C16.2821 11.0947 16.6685 12.0274 16.6685 13C16.6685 13.9726 16.2821 14.9053 15.5944 15.593C14.9067 16.2808 13.974 16.6671 13.0014 16.6671C12.0288 16.6671 11.096 16.2808 10.4083 15.593C9.72061 14.9053 9.33425 13.9726 9.33425 13C9.33425 12.0274 9.72061 11.0947 10.4083 10.407C11.096 9.71923 12.0288 9.33288 13.0014 9.33288Z" fill="white"/>
                    </svg>`
  a2.innerHTML = instaIcon;
  socialItem2.appendChild(a2);
  socialsList.appendChild(socialItem2);

  const socialItem3 = document.createElement('li');
  socialItem3.className = 'socials__item';
  const a3 = document.createElement('a');
  a3.href = '#';
  let youtubeIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.375 12.9291C24.375 12.8732 24.375 12.8097 24.3725 12.7361C24.3699 12.5304 24.3648 12.2994 24.3598 12.0531C24.3395 11.3447 24.3039 10.6388 24.248 9.97358C24.1719 9.05698 24.0602 8.29272 23.9078 7.7189C23.747 7.12006 23.4319 6.5739 22.9939 6.13502C22.5559 5.69614 22.0104 5.3799 21.4119 5.21792C20.6934 5.02495 19.2867 4.90562 17.3062 4.83198C16.3643 4.79644 15.3562 4.77358 14.3482 4.76089C13.9953 4.75581 13.6678 4.75327 13.3732 4.75073H12.6268C12.3322 4.75327 12.0047 4.75581 11.6518 4.76089C10.6438 4.77358 9.63574 4.79644 8.69375 4.83198C6.71328 4.90815 5.3041 5.02749 4.58809 5.21792C3.98938 5.3795 3.44365 5.69561 3.0056 6.13455C2.56755 6.57349 2.25255 7.11986 2.09219 7.7189C1.9373 8.29272 1.82812 9.05698 1.75195 9.97358C1.69609 10.6388 1.66055 11.3447 1.64023 12.0531C1.63262 12.2994 1.63008 12.5304 1.62754 12.7361C1.62754 12.8097 1.625 12.8732 1.625 12.9291V13.0712C1.625 13.1271 1.625 13.1906 1.62754 13.2642C1.63008 13.4699 1.63516 13.7009 1.64023 13.9472C1.66055 14.6556 1.69609 15.3615 1.75195 16.0267C1.82812 16.9433 1.93984 17.7076 2.09219 18.2814C2.41719 19.4976 3.37187 20.4574 4.58809 20.7824C5.3041 20.9753 6.71328 21.0947 8.69375 21.1683C9.63574 21.2039 10.6438 21.2267 11.6518 21.2394C12.0047 21.2445 12.3322 21.247 12.6268 21.2496H13.3732C13.6678 21.247 13.9953 21.2445 14.3482 21.2394C15.3562 21.2267 16.3643 21.2039 17.3062 21.1683C19.2867 21.0921 20.6959 20.9728 21.4119 20.7824C22.6281 20.4574 23.5828 19.5001 23.9078 18.2814C24.0627 17.7076 24.1719 16.9433 24.248 16.0267C24.3039 15.3615 24.3395 14.6556 24.3598 13.9472C24.3674 13.7009 24.3699 13.4699 24.3725 13.2642C24.3725 13.1906 24.375 13.1271 24.375 13.0712V12.9291ZM22.5469 13.0611C22.5469 13.1144 22.5469 13.1728 22.5443 13.2414C22.5418 13.4394 22.5367 13.6578 22.5316 13.8939C22.5139 14.5693 22.4783 15.2447 22.425 15.8718C22.3564 16.6894 22.26 17.3597 22.1406 17.8091C21.9832 18.3957 21.5211 18.8603 20.9371 19.0152C20.4039 19.1574 19.0607 19.2716 17.2352 19.3402C16.3109 19.3757 15.3156 19.3986 14.3229 19.4113C13.975 19.4164 13.6525 19.4189 13.3631 19.4189H12.6369L11.6771 19.4113C10.6844 19.3986 9.6916 19.3757 8.76484 19.3402C6.93926 19.2691 5.59355 19.1574 5.06289 19.0152C4.47891 18.8578 4.0168 18.3957 3.85938 17.8091C3.74004 17.3597 3.64355 16.6894 3.575 15.8718C3.52168 15.2447 3.48867 14.5693 3.46836 13.8939C3.46074 13.6578 3.4582 13.4369 3.45566 13.2414C3.45566 13.1728 3.45312 13.1119 3.45312 13.0611V12.9392C3.45312 12.8859 3.45313 12.8275 3.45566 12.7589C3.4582 12.5609 3.46328 12.3425 3.46836 12.1064C3.48613 11.431 3.52168 10.7556 3.575 10.1285C3.64355 9.31089 3.74004 8.64057 3.85938 8.19116C4.0168 7.60464 4.47891 7.13999 5.06289 6.98511C5.59609 6.84292 6.93926 6.72866 8.76484 6.66011C9.68906 6.62456 10.6844 6.60171 11.6771 6.58901C12.025 6.58393 12.3475 6.5814 12.6369 6.5814H13.3631L14.3229 6.58901C15.3156 6.60171 16.3084 6.62456 17.2352 6.66011C19.0607 6.7312 20.4064 6.84292 20.9371 6.98511C21.5211 7.14253 21.9832 7.60464 22.1406 8.19116C22.26 8.64057 22.3564 9.31089 22.425 10.1285C22.4783 10.7556 22.5113 11.431 22.5316 12.1064C22.5393 12.3425 22.5418 12.5634 22.5443 12.7589C22.5443 12.8275 22.5469 12.8884 22.5469 12.9392V13.0611ZM10.7402 16.4025L16.6309 12.9748L10.7402 9.5978V16.4025Z" fill="white"/>
                    </svg>`;
  a3.innerHTML = youtubeIcon;
  socialItem3.appendChild(a3);
  socialsList.appendChild(socialItem3);

  const socialItem4 = document.createElement('li');
  socialItem4.className = 'socials__item';
  const a4 = document.createElement('a');
  a4.href = '#';
  let facebookIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5002 2.1665H16.2502C14.8136 2.1665 13.4358 2.73719 12.42 3.75301C11.4042 4.76883 10.8335 6.14658 10.8335 7.58317V10.8332H7.5835V15.1665H10.8335V23.8332H15.1668V15.1665H18.4168L19.5002 10.8332H15.1668V7.58317C15.1668 7.29585 15.281 7.0203 15.4841 6.81714C15.6873 6.61397 15.9628 6.49984 16.2502 6.49984H19.5002V2.1665Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
  a4.innerHTML = facebookIcon;
  socialItem4.appendChild(a4);
  socialsList.appendChild(socialItem4);

  const socialItem5 = document.createElement('li');
  socialItem5.className = 'socials__item';
  const a5 = document.createElement('a');
  a5.href = '#';
  let tgIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1821 3.24682C20.9212 3.26579 20.6652 3.32698 20.424 3.428H20.4207C20.1892 3.51982 19.0882 3.98294 17.4145 4.68494L11.4166 7.211C7.11281 9.02288 2.88213 10.8071 2.88213 10.8071L2.9325 10.7876C2.9325 10.7876 2.64081 10.8835 2.33613 11.0923C2.14789 11.2121 1.98592 11.3688 1.86 11.553C1.7105 11.7724 1.59025 12.1079 1.63494 12.4549C1.70806 13.0415 2.08831 13.3933 2.36131 13.5875C2.63756 13.7841 2.90081 13.8759 2.90081 13.8759H2.90731L6.87475 15.2125C7.05269 15.7837 8.08375 19.1734 8.33156 19.9543C8.47781 20.4206 8.62 20.7123 8.79794 20.9349C8.88406 21.0487 8.98481 21.1438 9.10587 21.2201C9.16881 21.2567 9.23592 21.2857 9.30575 21.3063L9.26512 21.2965C9.27731 21.2998 9.28706 21.3095 9.296 21.3128C9.3285 21.3217 9.35044 21.3249 9.39187 21.3314C10.0199 21.5216 10.5245 21.1316 10.5245 21.1316L10.5529 21.1088L12.8954 18.976L16.8214 21.9879L16.9107 22.0261C17.7289 22.3853 18.5577 22.1854 18.9956 21.8328C19.4368 21.4777 19.6082 21.0235 19.6082 21.0235L19.6367 20.9504L22.6706 5.40807C22.7567 5.02457 22.7786 4.66544 22.6836 4.31688C22.5855 3.96411 22.3592 3.66071 22.049 3.46619C21.7885 3.30785 21.4865 3.23142 21.1821 3.24682ZM21.1 4.91244C21.0967 4.96363 21.1065 4.95794 21.0837 5.05625V5.06519L18.0783 20.4458C18.0653 20.4678 18.0434 20.5157 17.9832 20.5636C17.9199 20.614 17.8695 20.6457 17.6054 20.5409L12.8036 16.8594L9.90294 19.5033L10.5123 15.6114L18.3578 8.29894C18.6812 7.99832 18.5731 7.93494 18.5731 7.93494C18.5959 7.56607 18.0848 7.82688 18.0848 7.82688L8.19181 13.9556L8.18856 13.9393L3.44681 12.3428V12.3395L3.43463 12.3371C3.44294 12.3343 3.45108 12.331 3.459 12.3273L3.485 12.3143L3.51019 12.3054C3.51019 12.3054 7.74412 10.5211 12.0479 8.70925C14.2027 7.80169 16.3737 6.88763 18.0434 6.18238C19.7131 5.48119 20.9472 4.96688 21.0171 4.93925C21.0837 4.91325 21.0521 4.91325 21.1 4.91325V4.91244Z" fill="white"/>
                    </svg>`;
  a5.innerHTML = tgIcon;
  socialItem5.appendChild(a5); socialsList.appendChild(socialItem5);

  // Создание копирайта
  const copyright = document.createElement('div');
  copyright.className = 'footer-info__copyright copyright';
  footerInfo.appendChild(copyright);

  const rightsDetail = document.createElement('p');
  rightsDetail.className = 'copyright__detail copyright__detail_rights';
  rightsDetail.textContent = '© OnlineShop, 2023';
  copyright.appendChild(rightsDetail);

  const whoDetail = document.createElement('p');
  whoDetail.className = 'copyright__detail copyright__detail_who';
  whoDetail.innerHTML = 'Design by Anastasia Ilina <a href="mailto:ilina9825@gmail.com" class="copyright__detail-email">ilina9825@gmail.com</a>';
  copyright.appendChild(whoDetail);

  // Добавление footer в body
  body.appendChild(footer);
};

export { createFooter };
const createHeader = () => {
  const body = document.querySelector('body');

  // Создание элемента header
  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'container header__wrap grid-header';
  header.appendChild(container);

  const shopLink = document.createElement('a');
  shopLink.href = '/index.html';
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
class Timer {
  constructor(selector, fixedDeadline) {
    this.selector = selector;
    this.fixedDeadline = new Date(fixedDeadline);
    this.timeInterval = null;
    this.timeRemaining = null;
  }

  init = () => {
    this.updateTimer();
    this.timeInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  };

  updateTimer = () => {
    this.timeRemaining = this.getTimeRemaining();

    if (this.timeRemaining.total <= 0) {
    }

    this.renderTimer();
  };

  getTimeRemaining = () => {
    const t = this.fixedDeadline.getTime() - new Date().getTime();
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return { total: t, days, hours, minutes, seconds };
  };

  renderTimer = () => {
    let output = "";
    if (this.timeRemaining.total <= 0) {
      clearInterval(this.timeInterval);
      return;
    }

    if (this.timeRemaining.days > 0) {
      output += `<p class="date__item"><span class="date__bigger">${this.timeRemaining.days}</span> ${this.declOfNum(this.timeRemaining.days, ['день', 'дня', 'дней'])}</p>`;
    }

    if (this.timeRemaining.total < 24 * 60 * 60 * 1000) {
      output += `<p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.hours)}</span> ${this.declOfNum(this.timeRemaining.hours, ['час', 'часа', 'часов'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.minutes)}</span> ${this.declOfNum(this.timeRemaining.minutes, ['минута', 'минуты', 'минут'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.seconds)}</span> ${this.declOfNum(this.timeRemaining.seconds, ['секунда', 'секунды', 'секунд'])}</p>`;
    } else {
      output += `<p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.hours)}</span> ${this.declOfNum(this.timeRemaining.hours, ['час', 'часа', 'часов'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.minutes)}</span> ${this.declOfNum(this.timeRemaining.minutes, ['минута', 'минуты', 'минут'])}</p>`;
    }

    document.querySelector(this.selector).innerHTML = output;
  };

  addZero = num => (num < 10 ? `${num}` : num);

  declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };
}

const runTimer = () => {
  const fixedDeadline = '2024-03-01T23:59:59Z'; // Дедлайн
  const timerElements = document.querySelectorAll('[data-timer-deadline]');
  timerElements.forEach(el => {
    const timer = new Timer(`#${el.id}`, fixedDeadline);
    timer.init();
  });
}

export { runTimer };
