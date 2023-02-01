const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// year,month(0-Jan,1-feb,..),date,hour(0-12:00am, 1-1am,..),minutes, seconds
// let futureDate = new Date(2023, 1, 20, 17, 30, 0);

//this will add 10 days to the date.  So that our counter will always working when we open the webpage.
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveway ends on ${day}, ${date} ${month}, ${year} ${hours}:${minutes}`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //1s=1000ms
  //1m=60s
  //1hr=60m
  //1day=24hr

  //values in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate

  let days = t / oneDay;
  days = Math.floor(days);

  //getting the hours without including the days calculated
  let hours = Math.floor((t % oneDay) / oneHour);

  //getting the minutes from the total hours
  let minutes = Math.floor((t % oneHour) / oneMinute);

  //getting the seconds from the total minutes
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  //if the value is less than 10 then 0 will be added as first digit
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  //putting the values in the display screen
  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  //if the deadline is finished means then this will display
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry this giveway is expired</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
