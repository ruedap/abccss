const fs = require("fs");
const rc = require("rc");
const path = require("path");
const pkgDir = require("pkg-dir");

export class Env {
  public static readonly APP_NAME = "abccss";
  public static readonly CONFIG = rc(Env.APP_NAME, {
    stylesheetsRootDir: "./"
  });
  public static readonly ROOT_DIR = pkgDir.sync(__dirname);
  public static readonly SRC_DIR = `${Env.ROOT_DIR}/src/`;
  public static readonly SRC_STYLESHEETS_DIR = `${
    Env.SRC_DIR
  }/templates/stylesheets/`;
  public static readonly SRC_PLACEHOLDER_DIR = `${Env.SRC_DIR}/placeholders/`;
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

  public static isExistFile(file: string): boolean {
    try {
      fs.statSync(file);
      return true;
    } catch (err) {
      if (err.code === "ENOENT") return false;
    }

    return false;
  }
}
