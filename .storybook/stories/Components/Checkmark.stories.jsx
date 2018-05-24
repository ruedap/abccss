import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { mobile } from "../../screenshot-options";

storiesOf("Components/Atoms/Checkmark", module)
  .addDecorator(withScreenshot(mobile))
  .add("default", () => <span className="c-Checkmark" />)
  .add("2rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "2rem" }} />
  ))
  .add("3rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "3rem" }} />
  ));
