import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { desktop } from "../../screenshot-options";
import lorem from "../../lorem";

const Weight = () => {
  const l = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
  return (
    <React.Fragment>
      {l.map(w => {
        return (
          <React.Fragment key={w}>
            <p className={`u-ff-ss u-fw${w}`}>
              {w} {loremText}
            </p>
            <p className={`u-ff-s u-fw${w}`}>
              {w} {loremText}
            </p>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const loremText = `${lorem.ja}${lorem.en}`;

storiesOf("Abstractions/text", module)
  .addDecorator(withScreenshot(desktop))
  .add("heading", () => (
    <React.Fragment>
      <h1 className="u-ff-ss">h1 {loremText}</h1>
      <h1 className="u-ff-s">h1 {loremText}</h1>
      <h2 className="u-ff-ss">h2 {loremText}</h2>
      <h2 className="u-ff-s">h2 {loremText}</h2>
      <h3 className="u-ff-ss">h3 {loremText}</h3>
      <h3 className="u-ff-s">h3 {loremText}</h3>
      <h4 className="u-ff-ss">h4 {loremText}</h4>
      <h4 className="u-ff-s">h4 {loremText}</h4>
      <h5 className="u-ff-ss">h5 {loremText}</h5>
      <h5 className="u-ff-s">h5 {loremText}</h5>
      <h6 className="u-ff-ss">h6 {loremText}</h6>
      <h6 className="u-ff-s">h6 {loremText}</h6>
    </React.Fragment>
  ))
  .add("font-size", () => (
    <React.Fragment>
      <p className="u-ff-ss u-fz-xs">xs {loremText}</p>
      <p className="u-ff-s u-fz-xs">xs {loremText}</p>
      <p className="u-ff-ss u-fz-sm">sm {loremText}</p>
      <p className="u-ff-s u-fz-sm">sm {loremText}</p>
      <p className="u-ff-ss u-fz-md">md {loremText}</p>
      <p className="u-ff-s u-fz-md">md {loremText}</p>
      <p className="u-ff-ss u-fz-lg">lg {loremText}</p>
      <p className="u-ff-s u-fz-lg">lg {loremText}</p>
      <p className="u-ff-ss u-fz-xl">xl {loremText}</p>
      <p className="u-ff-s u-fz-xl">xl {loremText}</p>
    </React.Fragment>
  ))
  .add("font-weight", () => <Weight />);
