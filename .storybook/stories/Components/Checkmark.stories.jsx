import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { wh } from "../../screenshot-options";

storiesOf("Components/Atoms/Checkmark", module)
  .addDecorator(withScreenshot(wh(100, 100)))
  .add("default", () => <span className="c-Checkmark" />)
  .add("2rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "2rem" }} />
  ))
  .add("3rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "3rem" }} />
  ));
