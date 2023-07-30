import React from "react";
import renderer from "react-test-renderer";
import Input from "@/theme/input/index";

it("performs snapshot testing", () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
