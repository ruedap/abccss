// =============================================================================
// ABCCSS
// =============================================================================

import "../src/templates/stylesheets/basics.scss";
import "../src/templates/stylesheets/components.scss";
import "../src/templates/stylesheets/decorations.scss";
import "../src/templates/stylesheets/extras.scss";

// import jquery from "jquery/dist/jquery.js";
// global.$ = jquery;
// global.jQuery = jquery;

$(() => {
  console.log("jQuery enabled.");
});

// import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/js/dist/dropdown";

// =============================================================================
// Storybook
// =============================================================================

import { configure, addDecorator } from "@storybook/react";
import {
  setScreenshotOptions,
  initScreenshot
} from "storybook-chrome-screenshot";
import { mobileMin } from "./screenshot-options";
setScreenshotOptions(Object.assign(mobileMin(), { delay: 0 }));
addDecorator(initScreenshot());

const req = require.context("./stories", true, /.*\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
