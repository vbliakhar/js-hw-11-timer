const refs = {
  daysEl: document.querySelector('#timer-1 .value[data-value="days"]'),
  hoursEl: document.querySelector('#timer-1 .value[data-value="hours"]'),
  minsEl: document.querySelector('#timer-1 .value[data-value="mins"]'),
  secsEl: document.querySelector('#timer-1 .value[data-value="secs"]'),
};

const PROM_DALEY = 1000;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const startTime = this.targetDate;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = startTime - currentTime;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.selector.daysEl.innerHTML = days;
      this.selector.hoursEl.innerHTML = hours;
      this.selector.minsEl.innerHTML = mins;
      this.selector.secsEl.innerHTML = secs;
    }, PROM_DALEY);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: refs,
  targetDate: new Date("Jul 17, 2021"),
});

timer.start();
