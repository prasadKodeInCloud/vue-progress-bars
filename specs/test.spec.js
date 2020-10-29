import ProgressBoard from "@/components/ProgressBoard";
import { mount } from "@vue/test-utils";

test("board-spec", () => {
  const wrapper = mount(ProgressBoard);
  expect(wrapper.html()).toMatchSnapshot();
});
