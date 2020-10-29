<template>
  <div>
    <div class="progress-panel">
      <ProgressBar
        template
        v-for="(item, index) in barValues"
        :key="`progress_${index}`"
        :value="item.value"
        :limit="limit"
      />
    </div>

    <div class="controllers-panel">
      <div>
        <select class="dropdown" v-model="selectedIndex">
          <option
            :key="`option_${index}`"
            v-for="(option, index) in bars"
            :value="index"
          >
            {{ optionName(index) }}
          </option>
        </select>
      </div>
      <div>
        <ControlButton
          :key="`button_${value}`"
          :value="value"
          @click="onButtonClick"
          template
          v-for="value in buttons"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import ControlButton from "@/components/ControlButton";
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
      selectedIndex: `0`,
      barValues: this.bars.map((value) => {
        return { value: value };
      }),
    };
  },
  components: {
    ProgressBar,
    ControlButton,
  },
  computed: {},
  mounted() {},
  methods: {
    optionName(index) {
      return `#Progress${index + 1}`;
    },
    onButtonClick(payload) {
      this.barValues[parseInt(this.selectedIndex)].value += payload.amount;
    },
  },
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
