<template>
  <div class="future-forecast">
    <div class="today" id="current-temp">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="weather icon"
        class="w-icon"
      />
      <div class="other">
        <div class="day">Monday</div>
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
    </div>
    <div class="weather-forecast" id="weather-forecast">
      <div class="weather-forecast-item">
        <div class="day">Tue</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
          class="w-icon"
        />
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
      <div class="weather-forecast-item">
        <div class="day">Wed</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
          class="w-icon"
        />
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
      <div class="weather-forecast-item">
        <div class="day">Thur</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
          class="w-icon"
        />
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
      <div class="weather-forecast-item">
        <div class="day">Fri</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
          class="w-icon"
        />
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
      <div class="weather-forecast-item">
        <div class="day">Sat</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
          class="w-icon"
        />
        <div class="temp">Night - 25.6&#176; C</div>
        <div class="temp">Day - 35.6&#176; C</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
