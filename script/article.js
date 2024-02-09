import {createHeader} from "./modules/header.js";
import {createFooter} from "./modules/footer.js";
import {Breadcrumbs} from "./modules/breadcrumbs.js";
import {createMenu, handleMenu} from "./modules/menu.js"

const createArticle = () => {
  let body = document.querySelector('body');

  let article = document.createElement('article');
  article.className = 'article';

  const container = document.createElement('div');
  container.className = 'container';
  article.appendChild(container);

  let h1 = document.createElement('h1');
  h1.className = 'article__h1';
  h1.textContent = 'Как ухаживать за обувью из кожи';
  container.appendChild(h1);

  let p1 = document.createElement('p');
  p1.className = 'article__p';
  p1.textContent = 'Материала для обуви лучше натуральной кожи все ещё не придумали. Качественную кожу очень приятно носить, она идеально ложится по ноге, в нужных местах немного растягивается. В кожаной обуви, если она соответствует погоде, создаётся хороший микроклимат – ноги не мёрзнут, не потеют, и чувствуют себя очень комфортно. Неудивительно, что по статистике больше 60% покупателей выбирает обувь именно из гладкой натуральной кожи. Вдобавок кожа практична и не требует трудоёмкого ухода.';
  container.appendChild(p1);

  let p2 = document.createElement('p');
  p2.className = 'article__p';
  p2.textContent = 'Но это совсем не означает, что можно раз в полгода протереть обувь тряпочкой и на этом остановиться. Так же, как кожа лица и тела, материал обуви нуждается в заботе. Регулярный уход надолго продлит срок службы любимой пары и сделает её аккуратной и сияющей, словно только что из магазина.';
  container.appendChild(p2);

  let ol = document.createElement('ol');
  let li1 = document.createElement('li');
  let a1 = document.createElement('a');
  ol.className = 'article__ol article-ol';
  li1.className = 'article-ol__li';
  a1.className = 'article-ol__a';
  a1.href = '#before-buying';
  a1.textContent = 'На что стоит обратить внимание перед покупкой';
  li1.appendChild(a1);
  ol.appendChild(li1);

  let li2 = document.createElement('li');
  let a2 = document.createElement('a');
  li2.className = 'article-ol__li';
  a2.className = 'article-ol__a';
  a2.href = '#before-wearing';
  a2.textContent = 'Перед тем, как надеть обувь первый раз';
  li2.appendChild(a2);
  ol.appendChild(li2);

  let li3 = document.createElement('li');
  let a3 = document.createElement('a');
  li3.className = 'article-ol__li';
  a3.className = 'article-ol__a';
  a3.href = '#taking-care';
  a3.textContent = 'Ежедневный уход за кожаной обувью в домашних условиях';
  li3.appendChild(a3);
  ol.appendChild(li3);

  container.appendChild(ol);

  let mainContent = document.createElement('div');
  mainContent.className = 'article__main-content article-content';
  container.appendChild(mainContent);

  let img1 = document.createElement('img');
  img1.className = 'article-content__img';
  img1.alt = 'Коричневые замшевые ботинки - уход за обувью';
  img1.width = '1095';
  img1.height = '560';
  img1.src = 'img/brown-shoes.jpg';
  mainContent.appendChild(img1);

  let section1 = document.createElement('section');
  section1.className = 'article-content__section article-section';
  section1.setAttribute('aria-label', 'before buying');
  let h2_1 = document.createElement('h2');
  h2_1.className = 'article-section__h2';
  h2_1.id = 'before-buying';
  h2_1.textContent = 'На что стоит обратить внимание перед покупкой';
  section1.appendChild(h2_1);
  let p3 = document.createElement('p');
  p3.className = 'article-section__p';
  p3.textContent = 'Подбирайте обувь точно по размеру и полноте. Слишком тесная обувь будет чрезмерно растягиваться, и кожа испортится, не говоря уже о дискомфорте. А если модель сидит слишком свободно, то при ходьбе на ней начнут образовываться складки и заломы.';
  section1.appendChild(p3);
  mainContent.appendChild(section1);

  let section2 = document.createElement('section');
  section2.className = 'article-content__section article-section';
  section2.setAttribute('aria-label', 'before wearing');
  let h2_2 = document.createElement('h2');
  h2_2.className = 'article-section__h2';
  h2_2.id = 'before-wearing';
  h2_2.textContent = 'Перед тем, как надеть обувь первый раз';
  section2.appendChild(h2_2);
  let p4 = document.createElement('p');
  p4.className = 'article-section__p';
  p4.textContent = 'Перед первой ноской для новой пары нужно подобрать водо- или грязеотталкивающее средство, подходящее для натуральной кожи, и обработать кожу в соответствии с инструкцией. После высыхания – чистить кремом.';
  section2.appendChild(p4);
  mainContent.appendChild(section2);

  let section3 = document.createElement('section');
  section3.className = 'article-content__section article-section';
  section3.setAttribute('aria-label', 'taking care');
  let h2_3 = document.createElement('h2');
  h2_3.className = 'article-section__h2';
  h2_3.id = 'taking-care';
  h2_3.textContent = 'Ежедневный уход за кожаной обувью в домашних условиях';
  section3.appendChild(h2_3);
  let p5 = document.createElement('p');
  p5.className = 'article-section__p';
  p5.textContent = 'Лучше всего заняться обувью сразу после возвращения домой. Если этого не делать, то со временем появляются трудновыводимые пятна, портится цвет кожи, образуются трещины.';
  section3.appendChild(p5);
  mainContent.appendChild(section3);

  let p6 = document.createElement('p');
  p6.className = 'article-content__p';
  p6.textContent = 'После каждого выхода на улицу протирайте обувь сухой салфеткой, если на коже только пыль, или влажной тряпкой - в случае сильного загрязнения. Начинайте мыть с каблука, затем очистите подошву и после этого – материал верха. После мытья нужно как следует протереть пару мягкой тканью, чтобы избавить от лишней влаги. Иначе обувь будет сушиться очень долго.';
  mainContent.appendChild(p6);

  let img2 = document.createElement('img');
  img2.className = 'article-content__img';
  img2.alt = 'Приспособления для ухода за обувью';
  img2.width = '1095';
  img2.height = '560';
  img2.src = 'img/wax.jpg';
  mainContent.appendChild(img2);

  let p7 = document.createElement('p');
  p7.className = 'article-content__p';
  p7.textContent = 'Второй этап – сушка. Ни в коем случае не используйте источники тепла – батарею, обогреватель, фен с горячим воздухом. Да, они сушат быстро, но за это приходит расплата в виде задубевшей покоробившейся кожи. Нужно вытащить стельки, набить обувь бумагой либо положить внутрь формодержатели и сушить при комнатной температуре. Тогда ваши туфли или сапоги надолго сохранят красивую форму без заломов. Сушка длится довольно долго, и поэтому не рекомендуется носить одну и ту же пару каждый день. Обувь и подкладка должны отдохнуть и расправиться, только тогда вам будет комфортно и тепло.';
  mainContent.appendChild(p7);

  let p8 = document.createElement('p');
  p8.className = 'article-content__p';
  p8.textContent = 'И наконец – крем. Сухую и чистую пару нужно обработать кремом, чтобы кожа оставалась эластичной, мягкой и блестящей. Нанесите крем тоненьким слоем с помощью обувной щётки, и аккуратно распределите по всей поверхности. Затем через несколько часов, когда крем впитается, сотрите остатки сухой салфеткой и отполируйте кожу мягкой тряпочкой. Крем подбирается точно в цвет обуви, поэтому стоит задуматься ещё перед покупкой, каким уходовым средством вы будете пользоваться. В магазине легко подобрать черный, коричневый и самый универсальный – бесцветный крем. В продаже есть и другие цвета, но бывает сложно найти нужный оттенок. По мере необходимости дополнительно обрабатывайте пару водоотталкивающими спреями.';
  mainContent.appendChild(p8);

  body.appendChild(article);
}

document.addEventListener('DOMContentLoaded', () => {
  createHeader();

  const breadcrumbs = new Breadcrumbs();
  document.body.appendChild(breadcrumbs.render());

  createArticle();
  createFooter();
  createMenu();
  handleMenu();
});
