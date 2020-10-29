import ProgressBar from "@/components/ProgressBar";
import { mount } from "@vue/test-utils";

test("progress-bar-text", () => {
  const wrapper = mount(ProgressBar, {
    propsData: {
      value: 20,
      limit: 100,
    },
  });
  expect(wrapper.text()).toContain("20%");
});
