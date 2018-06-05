import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { mobileMin } from "../../screenshot-options";
import lorem from "../../lorem";

const Links = props => {
  return (
    <div className="p-2">
      <a className={props.classes} href="#ok">
        OK
      </a>

      <br />

      <a className={props.classes} href="http://localhost:6006/">
        http://localhost:6006/
      </a>

      <br />

      <a className={props.classes} href="#">
        {lorem.en}
      </a>

      <br />

      <a className={props.classes} href="#">
        {lorem.ja}
      </a>
    </div>
  );
};
storiesOf("Basics/utilities/transitions", module)
  .addDecorator(withScreenshot(mobileMin()))
  .add("borderHover", () => <Links classes="u-transition-borderHover" />)
  .add("borderHover--toRight", () => (
    <Links classes="u-transition-borderHover--toRight" />
  ))
  .add("borderHover--toLeft", () => (
    <Links classes="u-transition-borderHover--toLeft" />
  ));
