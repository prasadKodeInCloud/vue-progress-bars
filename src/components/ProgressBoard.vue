<template>
  <div>
    <div class="progress-panel">
      <div
        :key="`progress_${option.value}`"
        template
        v-for="(option, index) in progressBarOptions"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="controllers-panel">
      <div>
        <select class="dropdown" v-model="selectedOption">
          <option
            :key="`option_${option.value}`"
            v-for="option in progressBarOptions"
            v-bind:value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div>
        <button :key="`button_${value}`" template v-for="value in buttons">
          {{ value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-board",
  props: {
    buttons: {
      type: Array,
      default() {
        return [22, 49, -8, -21];
      },
    },
    bars: {
      type: Array,
      default() {
        return [59, 21, 23, 15];
      },
    },
    limit: {
      type: Number,
      default: 220,
    },
  },
  data() {
    return {
      selectedOption: `option_1`,
    };
  },
  components: {},
  computed: {
    progressBarOptions() {
      let index = 0;
      return this.bars.map(() => {
        index++;
        return { text: `#progress${index}`, value: `option_${index}` };
      });
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.controllers-panel {
  margin: auto;
  width: 50%;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  button {
    margin: 3px;
  }

  select {
    margin-top: 3px;
    height: 22px;
  }
}
</style>
