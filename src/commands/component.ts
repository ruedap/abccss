import { Command, flags } from "@oclif/command";
import { Env } from "../env";

const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const changeCase = require("change-case");

export default class Component extends Command {
  static description = "generate a Component template file";

  static examples = [
    `$ abccss component MyAwesomeComponent
Generated: path/to/stylesheets/components/_my-awesome-component.scss`
  ];

  static flags = {
    help: flags.help({
      char: "h"
    })
  };

  static args = [
    {
      name: "component_name",
      required: true,
      description: "set component name"
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
    const { args } = this.parse(Component);

    const dir = Env.getStylesheetsRootDir(args);
    const componentsDir = path.normalize(`${dir}/components`);
    const fileName = changeCase.paramCase(args.component_name);
    const file = `${componentsDir}/_${fileName}.scss`;
    const importFile = path.normalize(`${dir}/components.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(
      file,
      Env.SRC_COMPONENT_PLACEHOLDER(args.component_name)
    );
    fs.appendFileSync(importFile, `@import "./components/${fileName}";\n`);
    this.log(Env.generatedLog(file));
  }
}
