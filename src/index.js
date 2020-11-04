// @import '../src/styles.css';

import './css/styles.css';
// import '../src/css/styles.css';
// console.log("goit-js-hw-11-timer");

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor({selector, targetDate, updateTime}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.updateTime = updateTime;
        }
    
    start() {
        // console.log(targetDate.getTime());
        // console.log(`targetDate.getTime() - `, targetDate.getTime());
        setInterval(() => {
            const curentTime = Date.now();
            // console.log(`curentTime - `, this.targetDate);
            const deltaTime = this.targetDate - curentTime;
            // console.log(`deltaTime - `, deltaTime);
            const time = this.getTimeComponents(deltaTime);
            this.updateTime(time);
        }, 1000);
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    pad(value) {
      return String(value).padStart(2, '0');
    }   
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 10, 8, 23, 0, 0, 0),
  updateTime: writeDownNewDateInMarkup,
});

timer.start();

function writeDownNewDateInMarkup ({ days, hours, mins, secs }) {
    daysRef.textContent = `${days}`;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
}
