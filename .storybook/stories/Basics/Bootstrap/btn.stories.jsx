import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { all } from "../../../screenshot-options";

const LoremButton = props => {
  const modifiers = [
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
    <div>
      {modifiers.map((m, i) => {
        return (
          <button
            key={i}
            type="button"
            className={`btn ${props.btnClass}${m} mr-2 mb-2`}
          >
            ボタン
          </button>
        );
      })}
    </div>
  );
};

storiesOf("Basics/Bootstrap", module)
  .addDecorator(withScreenshot(all(3300, 1900, 1600)))
  .add("btn", () => (
    <div className="p-2">
      <h3>Default</h3>
      <LoremButton btnClass="btn-" />
      <h3>Outline</h3>
      <LoremButton btnClass="btn-outline-" />
      <h3>Active state</h3>
      <LoremButton btnClass="active btn-" />
      <LoremButton btnClass="active btn-outline-" />
      <h3>Disabled state</h3>
      <LoremButton btnClass="disabled btn-" />
      <LoremButton btnClass="disabled btn-outline-" />
      <h3>Sizes</h3>
      <LoremButton btnClass="btn-lg btn-" />
      <LoremButton btnClass="btn-lg btn-outline-" />
      <LoremButton btnClass="btn-sm btn-" />
      <LoremButton btnClass="btn-sm btn-outline-" />
      <LoremButton btnClass="btn-block btn-" />
      <LoremButton btnClass="btn-block btn-outline-" />
    </div>
  ));
