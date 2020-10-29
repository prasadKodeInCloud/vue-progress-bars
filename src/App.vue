<template>
  <div id="app">
    <ProgressBoard />
  </div>
</template>

<script>
import ProgressBoard from "./components/ProgressBoard.vue";

export default {
  name: "App",
  components: {
    ProgressBoard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
