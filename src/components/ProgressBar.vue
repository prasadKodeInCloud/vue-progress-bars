<template>
  <div>
    <div class="progress-bar-container">
      <div class="percentage">{{ `${progressValue}%` }}</div>
      <div class="proggress-bar" :style="barStyles"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    value: {
      type: Number,
    },
    limit: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    progressValue() {
      return this.value < 0 ? 0 : parseInt((this.value / this.limit) * 100);
    },
    barStyles() {
      let styles = {
        width: this.progressValue > 100 ? "100%" : `${this.progressValue}%`,
      };

      if (this.progressValue > 100) {
        styles.backgroundColor = "red";
      }

      return styles;
    },
  },
  methods: {},
};
</script>

<style scoped lang="less">
@progressHeight: 40px;
@progressBorderRadius: 6px;

.progress-bar-container {
  background: #e5e5e5;
  border-radius: @progressBorderRadius;
  width: 100%;
  margin: 5px 0 5px 0;
  height: @progressHeight;
  > .percentage {
    padding: 9px;
    font-weight: bold;
  }
}

.proggress-bar {
  background-color: #88d8b0;
  height: @progressHeight;
  margin-top: 3px - @progressHeight;
  border-radius: @progressBorderRadius;
  transition: width 0.3s;
}
</style>
