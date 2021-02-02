const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 1, 14, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
let month = months[futureDate.getMonth()];
// console.log(month);
let day = weekdays[futureDate.getDay()];
// console.log(day);
giveway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}: ${mins}AM`;

const futureTime = futureDate.getTime();
// console.log(futureTime);
function getRemainingTime() {
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    // console.log(t);

    // 1s = 1000s
    // 1min = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in milliseconds
    const oneDay = 24* 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay)/ oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    
    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h1 class="expired">Sorry, this giveaway expired</h1>`;
    }

    //set values array
    const values = [days, hours, minutes, seconds];
    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
