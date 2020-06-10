import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import home from "@/components/home.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(home, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
