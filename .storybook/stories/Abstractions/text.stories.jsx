import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { desktop } from "../../screenshot-options";
import lorem from "../../lorem";

const Weight = () => {
  const l = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
  return (
    <div>
      {l.map(w => {
        return (
          <p style={{ "font-weight": w }}>
            {w} {loremText}
          </p>
        );
      })}
    </div>
  );
};

const loremText = `${lorem.ja}${lorem.en}`;

storiesOf("Abstractions/text", module)
  .addDecorator(withScreenshot(desktop))
  .add("heading", () => (
    <div>
      <h1>h1 {loremText}</h1>
      <h2>h2 {loremText}</h2>
      <h3>h3 {loremText}</h3>
      <h4>h4 {loremText}</h4>
      <h5>h5 {loremText}</h5>
      <h6>h6 {loremText}</h6>
    </div>
  ))
  .add("font-size", () => (
    <div>
      <p className="u-fz-xs">xs {loremText}</p>
      <p className="u-fz-sm">sm {loremText}</p>
      <p className="u-fz-md">md {loremText}</p>
      <p className="u-fz-lg">lg {loremText}</p>
      <p className="u-fz-xl">xl {loremText}</p>
    </div>
  ))
  .add("font-weight", () => <Weight />);
