class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.targetDate = targetDate),
      (this.intervalId = null),
      (this.selector = this.getSelectorRef(selector));
  }

  start() {
    this.myTimer();
    this.intervalId = setInterval(() => {
      this.myTimer();
    }, 1000);
  }
  myTimer() {
    const startTime = this.targetDate;
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;
    const time = this.getTimeComponents(deltaTime);
    this.updateClockFace(time);
  }
  updateClockFace(time) {
    this.selector.daysRef.innerHTML = time.days;
    this.selector.hoursRef.innerHTML = time.hours;
    this.selector.minsRef.innerHTML = time.mins;
    this.selector.secsRef.innerHTML = time.secs;
  }
  getSelectorRef(selector) {
    const refs = {
      daysRef: document.querySelector(`${selector} [data-value="days"]`),
      hoursRef: document.querySelector(`${selector} [data-value="hours"]`),
      minsRef: document.querySelector(`${selector} [data-value="mins"]`),
      secsRef: document.querySelector(`${selector} [data-value="secs"]`),
    };
    return refs;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
timer.start();
