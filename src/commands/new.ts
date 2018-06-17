import { Command, flags } from "@oclif/command";
import { Env } from "../env";

const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

export default class New extends Command {
  static description = "generate new ABCCSS structure files";

  static flags = {
    help: flags.help({
      char: "h"
    })
  };

  static args = [
    {
      name: "stylesheets_root_dir",
      required: false,
      description: `set output dir. defaults to "${path.normalize(
        Env.CONFIG.stylesheetsRootDir
      )}"`
    }
  ];

  async run() {
    const { args } = this.parse(New);

    const dir = Env.getStylesheetsRootDir(args);
    fse.mkdirpSync(dir);
    fse.copySync(Env.SRC_STYLESHEETS_DIR, dir);
    this.log(Env.generatedLog(dir));
    if (!Env.isExistFile(Env.RC_FILE)) {
      fse.outputFileSync(Env.RC_FILE, Env.SRC_PLACEHOLDER(dir));
      this.log(Env.generatedLog(Env.RC_FILE));
    }
  }
}
