import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { desktop } from "../../../screenshot-options";
import lorem from "../../../lorem";

const Text = props => {
  const variations = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark"
  ];
  return (
    <React.Fragment>
      {variations.map(v => {
        return (
          <p className={`text-${v}`} key={v}>
            text-{v} {lorem.all}
          </p>
        );
      })}
    </React.Fragment>
  );
};
storiesOf("Basics/Bootstrap/utilities", module)
  .addDecorator(withScreenshot(desktop()))
  .add("text", () => <Text />);
