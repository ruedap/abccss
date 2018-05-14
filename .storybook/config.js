import { configure } from "@storybook/react";
import "../src/templates/stylesheets/application.scss";

const req = require.context("./stories", true, /.*\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
