import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { desktopMax } from "../../../screenshot-options";

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
    <React.Fragment>
      {modifiers.map((m, i) => {
        return (
          <React.Fragment>
            <button
              key={`button${i}`}
              className={`btn ${props.btnClass}${m} mr-2 mb-2`}
            >
              button要素
            </button>
            <input
              key={`input${i}`}
              type="button"
              className={`btn ${props.btnClass}${m} mr-2 mb-2`}
              value="input要素"
            />
            <a
              key={`a${i}`}
              href="#"
              className={`btn ${props.btnClass}${m} mr-2 mb-2`}
            >
              a要素
            </a>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

storiesOf("Basics/Bootstrap", module)
  .addDecorator(withScreenshot(desktopMax(3600)))
  .add("btn", () => (
    <div className="p-2">
      <h3>Default</h3>
      <LoremButton btnClass="btn-" />
      <h3>Outline</h3>
      <LoremButton btnClass="btn-outline-" />
      <h3>Button color override mixin</h3>
      <LoremButton btnClass="e-bs4-button-variant-color-override btn-" />
      <br />
      <LoremButton btnClass="e-bs4-button-outline-variant-color-override btn-outline-" />
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
