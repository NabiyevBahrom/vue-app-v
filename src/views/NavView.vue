<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">App</a>
      <H6 style="color: #fff">
        <div class="container">
          <div class="time_wrapper">
            <span class="text_color" id="time"></span>
            <span class="text_color" id="sec"></span>
            <span class="text_color" id="mid"></span>
          </div>
          <div class="day_wrapper">
            <span class="text_color">SUN</span>
            <span class="text_color">MON</span>
            <span class="text_color">TUE</span>
            <span class="text_color">WED</span>
            <span class="text_color">THU</span>
            <span class="text_color">FRI</span>
            <span class="text_color">SAT</span>
          </div>
          <span class="text_color" id="showDate"></span>
        </div>
      </H6>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle md-12"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                App
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">Home</a></li>
                <li>
                  <a class="dropdown-item" href="/weather">Weather</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/point">Powerpoint </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/about">About</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");

.text_color {
  background-color: #00ff01;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.time_wrapper {
  position: relative;
}

#time {
  text-shadow: 0 0 20px #3bac2c;
  font-size: 40px;
}

#sec {
  position: absolute;
  bottom: 30px;
  font-size: 15px;
}

#mid {
  position: absolute;
  top: 15px;
  right: -20px;
  font-size: 30px;
}

.day_wrapper {
  display: flex;
  position: relative;
  left: 20px;
  justify-content: space-between;
}

.day_wrapper span {
  font-size: 2px;
  font-weight: 400;
  opacity: 0.3;
}

#showDate {
  position: relative;
  left: 15px;
  font-size: 20px;
}
</style>
<script>
import { RouterLink } from "vue-router";
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mid = "AM";
  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector("#time").innerHTML = `${hour}:${min}`;
  document.querySelector("#sec").innerHTML = `${sec}`;
  document.querySelector("#mid").innerHTML = `${mid}`;
  let curr_date = date.getDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let month_name = [
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
  let showDay = document.querySelectorAll(".day_wrapper span");
  document.querySelector(
    "#showDate"
  ).innerHTML = `${month_name[month]} ${curr_date} ${year}`;
  showDay[day].style.opacity = "1";
}
function updateTime(e) {
  if (e < 10) return "0" + e;
  else return e;
}
setInterval(currentTime, 1000);
export default {
  name: "NavView",
  components: RouterLink,
};
</script>
