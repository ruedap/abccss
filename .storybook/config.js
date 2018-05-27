import { configure, addDecorator } from "@storybook/react";
import {
  setScreenshotOptions,
  initScreenshot
} from "storybook-chrome-screenshot";
import "../src/templates/stylesheets/application.scss";

setScreenshotOptions({
  delay: 0,
  viewport: {
    width: 1024,
    height: 768
  }
});
addDecorator(initScreenshot());

const req = require.context("./stories", true, /.*\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
