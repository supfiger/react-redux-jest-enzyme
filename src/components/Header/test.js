import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header Component", () => {
  it("should render without errors", () => {
    const component = shallow(<Header />);
    expect(component.length).toBe(1);
  });

  it("should render without errors", () => {
    const component = shallow(<Header />);
    expect(component.length).toBe(1);
  });
});
