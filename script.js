const day = document.getElementById("left-day");
const date = document.getElementById("left-date");
const month = document.getElementById("right-month");
const year = document.getElementById("right-year");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonths = [
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

const today = new Date();
console.log(today);

date.innerHTML = today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths[today.getDate()];
year.innerHTML = today.getFullYear();
