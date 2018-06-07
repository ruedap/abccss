import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { wh } from "../../screenshot-options";

storiesOf("Components/Atoms/RequiredLabel", module)
  .addDecorator(withScreenshot(wh(100, 100)))
  .add("Japanese", () => <span className="c-RequiredLabel">必須</span>)
  .add("Engelish", () => <span className="c-RequiredLabel">Required</span>);
