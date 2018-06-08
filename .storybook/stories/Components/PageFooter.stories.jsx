import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { all } from "../../screenshot-options";
import lorem from "../../lorem";

const PageFooter = props => {
  return (
    <footer className="c-PageFooter">
      <small className="c-PageFooter-copyright">
        <span>Copyright &copy; 2018 ABCCSS.</span>
        <span className="c-PageFooter-space">&ensp;</span>
        <span>All Rights Reserved.</span>
      </small>
    </footer>
  );
};

storiesOf("Components/Organisms/PageFooter", module)
  .addDecorator(withScreenshot(all(100, 100, 100, 100, 100, 100)))
  .add("default", () => <PageFooter />);
