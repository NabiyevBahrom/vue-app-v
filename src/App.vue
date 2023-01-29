<template>
  <div id="app">
    <NavView />
    <br />
    <br />
    <br />
    <br />
    <br />
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
<script>
import { RouterView } from "vue-router";
import NavView from "./views/NavView.vue";
export default {
  name: "App",
  components: {
    NavView,
    RouterView,
  },
};
</script>
