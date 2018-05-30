import "./stylesheets/application.scss";
require.context("./images", true, /\.(png|jpg|jpeg|svg)$/);

import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

$(() => {
  console.log("jQuery enabled.");
});
