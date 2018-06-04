import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { mobileMin, tabletMin, desktopMin } from "../../screenshot-options";
import lorem from "../../lorem";

const LoremList = props => {
  return (
    <ul className={`c-List ${props.modifiers}`}>
      {[...Array(6).keys()].map(i => {
        return (
          <li className="c-List-item" key={i}>
            {lorem.all}
          </li>
        );
      })}
    </ul>
  );
};

storiesOf("Components/Atoms/List", module)
  .addDecorator(
    withScreenshot([mobileMin(1000), tabletMin(500), desktopMin(400)])
  )
  .add("List", () => <LoremList modifiers="" />)
  .add("List--circled", () => <LoremList modifiers="c-List--circled" />)
  .add("List--circledNumbers", () => (
    <LoremList modifiers="c-List--circledNumbers" />
  ));
