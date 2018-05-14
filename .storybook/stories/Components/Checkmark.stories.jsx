import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Components/Atoms/Checkmark", module)
  .add("default", () => <span className="c-Checkmark" />)
  .add("2rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "2rem" }} />
  ))
  .add("3rem", () => (
    <span className="c-Checkmark" style={{ fontSize: "3rem" }} />
  ));
