// =============================================================================
// ABCCSS
// =============================================================================

import "../src/templates/stylesheets/application.scss";

import jquery from "jquery/dist/jquery.js";
global.$ = jquery;
global.jQuery = jquery;

$(() => {
  console.log("jQuery enabled.");
});

import "bootstrap/dist/js/bootstrap.bundle.js";

$(() => {
  // $(".dropdown-toggle").dropdown();
});

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
