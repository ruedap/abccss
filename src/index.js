#!/usr/bin/env node

"use strict";

const appName = "abccss";
const figlet = require("figlet");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const config = require("rc")(appName, { stylesheetsRootDir: "./" });

const stylesheetsRootDir = path.normalize(config.stylesheetsRootDir);
const cmdDir = path.dirname(fs.realpathSync(__filename));
const stylesheetsDir = `${cmdDir}/templates/stylesheets/`;
const placeholdersDir = `${cmdDir}/placeholders/`;
const componentPlaceholderFile = `${placeholdersDir}_Component.js`;
const componentPlaceholder = require(componentPlaceholderFile);
const decorationPlaceholderFile = `${placeholdersDir}_Decoration.js`;
const decorationPlaceholder = require(decorationPlaceholderFile);
const rcPlaceholderFile = `${placeholdersDir}rc.js`;
const rcPlaceholder = require(rcPlaceholderFile);
const rcFile = `.${appName}rc`;

const packageJson = path.normalize(`${cmdDir}/../package.json`);
const pkg = JSON.parse(fs.readFileSync(packageJson, "utf8"));

function isExistFile(file) {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") return false;
  }
}

function getStylesheetsRootDir(dir) {
  return path.normalize(dir || stylesheetsRootDir);
}

function putGeneratedLog(path) {
  console.log(`Generated: ${path}`);
}

var program = require("commander");

program.version(pkg.version);

program
  .command("init")
  .description("generate new ABCCSS structure files")
  .option(
    "-d, --dir <string>",
    `set output path. defaults to "${stylesheetsRootDir}"`
  )
  .action(function(options) {
    const dir = getStylesheetsRootDir(options.dir);
    fse.mkdirpSync(dir);
    fse.copySync(stylesheetsDir, dir);
    putGeneratedLog(dir);
    if (!isExistFile(rcFile)) {
      fse.outputFileSync(rcFile, rcPlaceholder(dir));
      putGeneratedLog(rcFile);
    }
  });

program
  .command("component <name>")
  .alias("c")
  .description("generate a Component template file")
  .option(
    "-d, --dir <string>",
    `set output path. defaults to "${stylesheetsRootDir}"`
  )
  .action(function(name, options) {
    const dir = getStylesheetsRootDir(options.dir);
    const componentsDir = path.normalize(`${dir}/Components`);
    const file = `${componentsDir}/_${name}.scss`;
    const importFile = path.normalize(`${dir}/_Components.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(file, componentPlaceholder(name));
    fs.appendFileSync(importFile, `@import "./Components/${name}";\n`);
    putGeneratedLog(file);
  });

program
  .command("decoration <name>")
  .alias("d")
  .description("generate a Decoration template file")
  .option(
    "-d, --dir <string>",
    `set output path. defaults to "${stylesheetsRootDir}"`
  )
  .action(function(name, options) {
    const dir = getStylesheetsRootDir(options.dir);
    const decorationDir = path.normalize(`${dir}/Decorations`);
    const file = `${decorationDir}/_${name}.scss`;
    const importFile = path.normalize(`${dir}/_Decorations.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(file, decorationPlaceholder(name));
    fs.appendFileSync(importFile, `@import "./Decorations/${name}";\n`);
    putGeneratedLog(file);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(
    chalk.yellow(figlet.textSync("ABCCSS", { horizontalLayout: "full" }))
  );

  program.outputHelp();
}
