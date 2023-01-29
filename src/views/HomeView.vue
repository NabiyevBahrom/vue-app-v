<template>
  <h1 class="text-align: center;">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="./img/MicrosoftTeams-image-21.webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Weather</h5>
            <p>
              weather app
              <button class="btn btn-primary">
                <a href="/weather" class="nav-link">Weather</a>
              </button>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./img/paint.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Paint</h5>
            <p>
              Paint
              <button class="btn btn-primary">
                <a href="/weather" class="nav-link">Paint</a>
              </button>
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </h1>
</template>
<style>
body {
  background: white;
}
h1 {
  text-align: center;
}
.carousel-item {
  width: 100%;
  height: 390px;
}
.carousel-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "HomeView",
};
</script>
