import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PointView from "../views/PointView.vue";
import WeatherView from "../views/WeatherView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/point",
    name: "point",
    component: PointView,
  },
  {
    path: "/weather",
    name: "weather",
    component: WeatherView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
