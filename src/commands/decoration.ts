import { Command, flags } from "@oclif/command";
import { Env } from "../env";

const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const changeCase = require("change-case");

export default class Decoration extends Command {
  static description = "generate a Decoration template file";

  static examples = [
    `$ abccss decoration MyAwesomeDecoration
Generated: path/to/stylesheets/decorations/_my-awesome-decoration.scss`
  ];

  static flags = {
    help: flags.help({
      char: "h"
    })
  };

  static args = [
    {
      name: "decoration_name",
      required: true,
      description: "set decoration name"
    },
    {
      name: "stylesheets_root_dir",
      required: false,
      description: `set output dir. defaults to "${path.normalize(
        Env.CONFIG.stylesheetsRootDir
      )}"`
    }
  ];

  async run() {
    const { args } = this.parse(Decoration);

    const dir = Env.getStylesheetsRootDir(args);
    const decorationsDir = path.normalize(`${dir}/decorations`);
    const fileName = changeCase.paramCase(args.decoration_name);
    const file = `${decorationsDir}/_${fileName}.scss`;
    const importFile = path.normalize(`${dir}/decorations.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(
      file,
      Env.SRC_DECORATION_PLACEHOLDER(args.decoration_name)
    );
    fs.appendFileSync(importFile, `@import "./decorations/${fileName}";\n`);
    this.log(Env.generatedLog(file));
  }
}
