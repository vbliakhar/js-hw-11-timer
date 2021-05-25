// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
const refs = {
  daysRef: document.querySelector('#timer-1 .value[data-value="days"]'),
  hoursRef: document.querySelector('#timer-1 .value[data-value="hours"]'),
  minsRef: document.querySelector('#timer-1 .value[data-value="mins"]'),
  secsRef: document.querySelector('#timer-1 .value[data-value="secs"]'),
};
const timer = {
  start() {
    const startTime = new Date("Jul 17, 2021");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      // daysRef.innerHTML = days;
      // hoursRef.innerHTML = hours;
      // minsRef.innerHTML = mins;
    }, 1000);
  },
};
timer.start();
function pad(value) {
  return String(value).padStart(2, "0");
}
function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  secsRef.innerHTML = secs;
  return { days, hours, mins, secs };
}
