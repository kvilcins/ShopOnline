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
      document.querySelector('.description-ending').style.display = 'none';
      return;
    };

    let output = "";
    if (this.timeRemaining.days > 0) {
      output += `<p class="date__item"><span class="date__bigger">${this.timeRemaining.days}</span> ${this.declOfNum(this.timeRemaining.days, ['день', 'дня', 'дней'])}</p>`;
    };

    if (this.timeRemaining.total < (24 * 60 * 60 * 1000)) {
      output += `<p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.hours)}</span> ${this.declOfNum(this.timeRemaining.hours, ['час', 'часа', 'часов'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.minutes)}</span> ${this.declOfNum(this.timeRemaining.minutes, ['минута', 'минуты', 'минут'])}</p><p class="date__item"><span class="date__bigger">${this.addZero(this.timeRemaining.seconds)}</span> ${this.declOfNum(this.timeRemaining.seconds, ['секунда', 'секунды', 'секунд'])}</p>`;
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
