import React from "react";
import renderer from "react-test-renderer";
import Modal from "./Index";

it("performs snapshot testing", () => {
  const tree = renderer.create(<Modal />).toJSON();
  expect(tree).toMatchSnapshot();
});
