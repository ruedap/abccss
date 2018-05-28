import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { wh } from "../../screenshot-options";

storiesOf("Components/Atoms/Chevron", module)
  .addDecorator(withScreenshot(wh(100, 100)))
  .add("Chevron", () => <span className="c-Chevron" />)
  .add("Chevron--top", () => <span className="c-Chevron c-Chevron--top" />)
  .add("Chevron--right", () => <span className="c-Chevron c-Chevron--right" />)
  .add("Chevron--bottom", () => (
    <span className="c-Chevron c-Chevron--bottom" />
  ))
  .add("Chevron--left", () => <span className="c-Chevron c-Chevron--left" />);
