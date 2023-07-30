import React from "react";
import renderer from "react-test-renderer";
import Button from "@/theme/Button/index";

// import Button from "./Button";

it("performs snapshot testing", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
