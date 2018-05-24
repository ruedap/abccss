import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";

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

const ssopt = {
  viewport: [
    // Mobile
    {
      width: 320,
      height: 3300,
      isMobile: true,
      hasTouch: true
    },
    // Tablet
    {
      width: 768,
      height: 1900,
      isMobile: true,
      hasTouch: true
    },
    // Desktop
    {
      width: 1024,
      height: 1600
    }
  ]
};

storiesOf("Basics/Bootstrap", module)
  .addDecorator(withScreenshot(ssopt))
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
