<template>
  <div class="progress-bar">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  components: {},
  computed: {},
  watch: {
    value() {
      console.log("changed");
      //this.currentValue = this.value;
    },
  },
  methods: {},
};
</script>

<style scoped lang="less">
.progress-bar {
  text-align: center;
  height: 50px;
  border: 1px solid rgb(162, 238, 187);
}
</style>
