import ControlButton from "@/components/ControlButton";
import { mount } from "@vue/test-utils";

test("control-button-text", () => {
  const wrapper = mount(ControlButton, {
    propsData: {
      value: 15,
    },
  });

  expect(wrapper.find("button").text()).toContain("15");
});

test("control-button-emit-amount-on-click", async () => {
  const wrapper = mount(ControlButton, {
    propsData: {
      value: 30,
    },
  });

  const button = wrapper.find("button");
  await button.trigger("click");
  expect(wrapper.emitted().click).toBeTruthy();
  expect(wrapper.emitted().click[0][0].amount).toBe(30);
});
