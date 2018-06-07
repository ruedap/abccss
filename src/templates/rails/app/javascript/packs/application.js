import "../stylesheets/basics.scss";
import "../stylesheets/components.scss";
import "../stylesheets/decorations.scss";
import "../stylesheets/extras.scss";
require.context(
  "../images",
  true,
  /\.(jpg|jpeg|png|gif|tiff|ico|svg|eot|otf|ttf|woff|woff2)$/i
);
