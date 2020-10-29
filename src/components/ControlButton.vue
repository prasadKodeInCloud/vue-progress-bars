<template>
  <button @click="onButtonClick(value)">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "control-button",
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    onButtonClick() {
      this.$emit("click", { amount: this.value });
    },
  },
};
</script>

<style scoped lang="less"></style>
