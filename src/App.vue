<template>
  <div id="vue-library">
    <Header-app />
    <Books />
  </div>
</template>

<script>
import Books from "./components/Book";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Books: Books,
    "Header-app": Header
  },

};
</script>

<style>
body {
  background-image: url('./assets/prepare-bare-wood-staining.jpg') !important;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
