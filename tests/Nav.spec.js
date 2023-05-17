import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  it("renders a profile link", () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });
    const profileLink = wrapper.get("#profile");
    expect(profileLink.text()).toEqual("My Profile");
  });
});
