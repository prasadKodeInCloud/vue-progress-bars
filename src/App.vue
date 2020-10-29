<template>
  <div id="app">
    <ProgressBoard :bars="bars" :limit="limit" :buttons="buttons" />
  </div>
</template>

<script>
import ProgressBoard from "./components/ProgressBoard.vue";
import progressService from "@/api/progress.svc";

export default {
  name: "App",
  data() {
    return {
      limit: 0,
      bars: [],
      buttons: [],
    };
  },
  components: {
    ProgressBoard,
  },
  mounted() {
    this.loadProgressStats();
  },
  methods: {
    async loadProgressStats() {
      try {
        let result = await progressService.bars();
        console.log(result);
        this.limit = result.data.limit;
        this.bars = result.data.bars;
        this.buttons = result.data.buttons;
      } catch (err) {
        console.log(err);
      }
    },
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
