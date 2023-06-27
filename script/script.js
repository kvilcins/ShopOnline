'use strict';

class Timer {
  constructor(selector, deadline) {
    this.selector = selector;
    this.deadline = deadline;
    this.timeInterval = null;
    this.timeRemaining = null;
  };

  init = () => {
    this.timeRemaining = this.getTimeRemaining();
    this.updateClock();
    this.timeInterval = setInterval(() => {
      this.timeRemaining = this.getTimeRemaining();
      this.updateClock();
    }, 1000);
  };

  getTimeRemaining = () => {
    const t = Date.parse(this.deadline) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return { total: t, days, hours, minutes, seconds };
  };

  updateClock = () => {
    if (this.timeRemaining.total <= 0) {
      clearInterval(this.timeInterval);
      document.querySelector(this.selector).innerHTML = "Акция закончилась";
      return;
    };

    let output = "";
    if (this.timeRemaining.days > 0) {
      output += `<p class="date__item"><span class="date__bigger">${this.timeRemaining.days}</span> ${this.declOfNum(this.timeRemaining.days, ['день', 'дня', 'дней'])}</p>`;
    };

    if (this.timeRemaining.total < (24 * 60 * 60 * 1000)) {
      output += `<p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.hours)}</span>:${this.addZero(this.timeRemaining.minutes)}:${this.addZero(this.timeRemaining.seconds)}</p>`;
    } else {
      output += `<p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.hours)}</span> ${this.declOfNum(this.timeRemaining.hours, ['час', 'часа', 'часов'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.minutes)}</span> ${this.declOfNum(this.timeRemaining.minutes, ['минута', 'минуты', 'минут'])}</p>`;
    };

    document.querySelector(this.selector).innerHTML = output;
  };

  addZero = num => num < 10 ? `0${num}` : num;

  declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 >4 && number %100 <20)?2:cases[(number%10<5)?number%10:5]];
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const timerElements = document.querySelectorAll('[data-timer-deadline]');
  timerElements.forEach(el => {
    const deadline = el.getAttribute('data-timer-deadline');
    const timer = new Timer(`#${el.id}`, deadline);
    timer.init();
  });
});


// 1. Скрипт начинает работу после загрузки страницы, когда срабатывает событие `DOMContentLoaded`.
// 2. Скрипт ищет на странице все элементы с атрибутом `data-timer-deadline`, который содержит дедлайн для таймера.
// 3. Для каждого найденного элемента скрипт создает новый экземпляр класса `Timer`, передавая в конструктор селектор элемента и дедлайн.
// 4. Затем скрипт вызывает метод `init` для каждого созданного экземпляра класса `Timer`. Этот метод запускает таймер и обновляет его каждую секунду.
// 5. Метод `init` вызывает метод `getTimeRemaining`, чтобы вычислить оставшееся время до дедлайна. Этот метод вычисляет разницу между дедлайном и текущим временем и возвращает объект с количеством оставшихся дней, часов, минут и секунд.
// 6. Затем метод `init` вызывает метод `updateClock`, чтобы обновить содержимое элемента с таймером. Этот метод проверяет, не истекло ли время до дедлайна. Если время истекло, то он останавливает таймер и выводит сообщение об окончании акции.
// 7. Если время еще не истекло, то метод `updateClock` формирует строку с оставшимся временем и обновляет содержимое элемента с таймером.
// 8. Метод `init` также запускает интервал, который каждую секунду вызывает методы `getTimeRemaining` и `updateClock`, чтобы обновлять таймер в реальном времени.
