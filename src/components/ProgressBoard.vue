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
      barValues: this.barsInfo(),
    };
  },
  components: {
    ProgressBar,
    ControlButton,
  },
  computed: {},
  watch: {
    bars() {
      this.barValues = this.barsInfo();
    },
  },
  methods: {
    barsInfo() {
      return this.bars.map((value) => {
        return { value: value };
      });
    },
    optionName(index) {
      return `#Progress${index + 1}`;
    },
    onButtonClick(payload) {
      let index = parseInt(this.selectedIndex);
      let val = this.barValues[index].value + payload.amount;
      this.barValues[index].value = val < 0 ? 0 : val;
    },
  },
};
</script>

<style scoped lang="less">
@import "../styles/index.less";

@media (min-width: @desktopScreen) {
  .controllers-panel {
    margin: auto;
    width: 50%;
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: @mobileScreen) {
  .controllers-panel {
    .dropdown {
      margin-bottom: 10px;
    }
  }
}

select {
  margin-top: 3px;
  height: 22px;
}
</style>
