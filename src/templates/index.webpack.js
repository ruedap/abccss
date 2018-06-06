import "./stylesheets/notosansjp.scss";
import "./stylesheets/basics.scss";
import "./stylesheets/components.scss";
import "./stylesheets/decorations.scss";
import "./stylesheets/extras.scss";
require.context("./images", true, /\.(png|jpg|jpeg|svg)$/);

import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

$(() => {
  console.log("jQuery enabled.");
});
