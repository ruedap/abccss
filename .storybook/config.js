import { configure, addDecorator } from "@storybook/react";
import { setDefaults, withInfo } from "@storybook/addon-info";
import { initScreenshot } from "storybook-chrome-screenshot";
import "../src/templates/stylesheets/application.scss";

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});
addDecorator((story, context) => withInfo("")(story)(context));
addDecorator(initScreenshot());

const req = require.context("./stories", true, /.*\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
