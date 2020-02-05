import React from "react";
import { shallow, mount } from "enzyme";
import { enzyme } from "../setupTests";
import ModalWindow from "./ModalWindow";

enzyme();

let wrapper;

const props = {
  show: false,
  onClose: jest.fn()
};

const Component = props => <ModalWindow {...props} />;

describe("Modal Window", () => {
  afterEach(() => {
    wrapper.unmount();
  });

  it("Component full rendering", () => {
    const newProps = {
      ...props,
      show: true
    };

    wrapper = shallow(Component(newProps));

    expect(wrapper.html()).not.toBeNull();
  });

  it("Shoud handle the click event", () => {
    const newProps = {
      ...props,
      show: true
    };

    wrapper = mount(Component(newProps));
    const closeBtn = wrapper.find(".close");

    closeBtn.simulate("click");
    expect(newProps.onClose).toHaveBeenCalledTimes(1);
    newProps.onClose.mockClear();
  });
});
