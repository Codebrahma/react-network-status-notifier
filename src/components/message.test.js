import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Message from "./message";

configure({ adapter: new Adapter() });

describe("<Message />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Message
        style={{ fontFamily: "cursive" }}
        className="myMessage"
        message="Test message"
      />
    );
  });

  it("should have a class of HideNSeek-message", () => {
    expect(wrapper.hasClass("myMessage")).toBeTruthy();
  });

  it("should have the message passed to it as a prop", () => {
    expect(wrapper.text()).toEqual("Test message");
  });

  it("should have the style object passed to it as a prop", () => {
    expect(wrapper.props().style).toMatchObject({ fontFamily: "cursive" });
  });
});
