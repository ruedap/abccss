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
const skeletonsDir = `${cmdDir}/skeletons/`;
const componentSkeletonFile = `${skeletonsDir}_Component.js`;
const componentSkeleton = require(componentSkeletonFile);
const decorationSkeletonFile = `${skeletonsDir}_Decoration.js`;
const decorationSkeleton = require(decorationSkeletonFile);
const rcSkeletonFile = `${skeletonsDir}rc.js`;
const rcSkeleton = require(rcSkeletonFile);
const rcFile = `.${appName}rc`;

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

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
      fse.outputFileSync(rcFile, rcSkeleton(dir));
      putGeneratedLog(rcFile);
    }
  });

program
  .command("component <name>")
  .alias("c")
  .description("generate a component template file")
  .option(
    "-d, --dir <string>",
    `set output path. defaults to "${stylesheetsRootDir}"`
  )
  .action(function(name, options) {
    const dir = getStylesheetsRootDir(options.dir);
    const componentsDir = path.normalize(`${dir}/components`);
    const file = `${componentsDir}/_${name}.scss`;
    const importFile = path.normalize(`${dir}/_components.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(file, componentSkeleton(name));
    fs.appendFileSync(importFile, `@import "./components/${name}";\n`);
    putGeneratedLog(file);
  });

program
  .command("decoration <name>")
  .alias("d")
  .description("generate a decoration template file")
  .option(
    "-d, --dir <string>",
    `set output path. defaults to "${stylesheetsRootDir}"`
  )
  .action(function(name, options) {
    const dir = getStylesheetsRootDir(options.dir);
    const decorationDir = path.normalize(`${dir}/decorations`);
    const file = `${decorationDir}/_${name}.scss`;
    const importFile = path.normalize(`${dir}/_decorations.scss`);
    fse.mkdirpSync(dir);
    fse.outputFileSync(file, decorationSkeleton(name));
    fs.appendFileSync(importFile, `@import "./decorations/${name}";\n`);
    putGeneratedLog(file);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(
    chalk.yellow(figlet.textSync("ABCCSS", { horizontalLayout: "full" }))
  );

  program.outputHelp();
}
