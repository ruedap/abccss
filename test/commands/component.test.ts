import { expect, test } from "@oclif/test";

import { Env } from "../../src/env";
import * as sinon from "sinon";

const fs = require("fs");
const fse = require("fs-extra");

describe("component", () => {
  test
    .stdout()
    .stub(Env, "getStylesheetsRootDir", sinon.stub().returns("foo/bar/baz"))
    .stub(fse, "mkdirpSync", sinon.stub())
    .stub(fse, "outputFileSync", sinon.stub())
    .stub(fs, "appendFileSync", sinon.stub())
    .command(["component", "FooBarComponent"])
    .it("runs component FooBarComponent", ctx => {
      const expected = `Generated: foo/bar/baz/components/_foo-bar-component.scss\n`;
      expect(ctx.stdout).to.equal(expected);
      expect(fse.mkdirpSync.calledOnce).to.equal(true);
      expect(fse.outputFileSync.calledOnce).to.equal(true);
      expect(fs.appendFileSync.calledOnce).to.equal(true);
    });

  test
    .stdout()
    .stub(fse, "mkdirpSync", sinon.stub())
    .stub(fse, "outputFileSync", sinon.stub())
    .stub(fs, "appendFileSync", sinon.stub())
    .command(["component", "FooBarComponent", "1/2/3/"])
    .it("runs component FooBarComponent 1/2/3/", ctx => {
      const expected = `Generated: 1/2/3/components/_foo-bar-component.scss\n`;
      expect(ctx.stdout).to.equal(expected);
      expect(fse.mkdirpSync.calledOnce).to.equal(true);
      expect(fse.outputFileSync.calledOnce).to.equal(true);
      expect(fs.appendFileSync.calledOnce).to.equal(true);
    });
});
