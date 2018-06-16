const fs = require("fs");
const rc = require("rc");
const path = require("path");

export class Env {
  public static readonly APP_NAME = "abccss";
  public static readonly CONFIG = rc(Env.APP_NAME, {
    stylesheetsRootDir: "./"
  });
  public static readonly CMD_DIR = fs.realpathSync(__dirname);
  public static readonly SRC_STYLESHEETS_DIR = `${
    Env.CMD_DIR
  }/templates/stylesheets/`;
  public static readonly SRC_PLACEHOLDER_DIR = `${Env.CMD_DIR}/placeholders/`;
  public static readonly SRC_RC_PLACEHOLDER_FILE = `${
    Env.SRC_PLACEHOLDER_DIR
  }rc.js`;
  public static readonly SRC_PLACEHOLDER = require(Env.SRC_RC_PLACEHOLDER_FILE);
  public static readonly RC_FILE = `.${Env.APP_NAME}rc`;

  public static readonly SRC_COMPONENT_FILE = `${
    Env.SRC_PLACEHOLDER_DIR
  }_component.js`;
  public static readonly SRC_COMPONENT_PLACEHOLDER = require(Env.SRC_COMPONENT_FILE);

  public static readonly SRC_DECORATION_FILE = `${
    Env.SRC_PLACEHOLDER_DIR
  }_decoration.js`;
  public static readonly SRC_DECORATION_PLACEHOLDER = require(Env.SRC_DECORATION_FILE);

  public static generatedLog(path: string): string {
    return `Generated: ${path}`;
  }

  public static getStylesheetsRootDir(args: any): string {
    return path.normalize(
      args.stylesheets_root_dir || Env.CONFIG.stylesheetsRootDir
    );
  }
}
