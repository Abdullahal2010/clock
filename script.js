var times = document.querySelector("#time");
var dates = document.querySelector("#date");
var amPms = document.querySelector("#amPms");
var amPm;

setInterval(function () {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var date = dateTime.getDate();
  var month = dateTime.getMonth();
  var year = dateTime.getFullYear();
  
  console.log(month);

  seconds = formatTime(seconds);
  minutes = formatTime(minutes);
  hours = formatHours(hours);
  date = formatTime(date);
  month = formatTime(month);

  var timesReal = hours + ":" + minutes + ":" + seconds;
  var datesReal = date + "-" + month + "-" + year;

  times.innerText = timesReal;
  dates.innerText = datesReal;
  amPms.innerText = amPm;
}, 1000);

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

const formatHours = (hoursValue) => {
  var halfHours = Math.floor(hoursValue - 12);
  if (hoursValue > 12) {
    hoursValue = halfHours;
    amPm = "pm";
  } else {
    amPm = "am";
  }
  return hoursValue;
};
