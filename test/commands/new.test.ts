import { expect, test } from "@oclif/test";
import { Env } from "../../src/env";
import * as sinon from "sinon";

const fse = require("fs-extra");

describe("new", () => {
  test
    .stdout()
    .stub(Env, "getStylesheetsRootDir", sinon.stub().returns("foo/bar/baz"))
    .stub(Env, "isExistFile", sinon.stub().returns(false))
    .stub(fse, "mkdirpSync", sinon.stub())
    .stub(fse, "copySync", sinon.stub())
    .stub(fse, "outputFileSync", sinon.stub())
    .command(["new"])
    .it("runs new", ctx => {
      const expected = `Generated: foo/bar/baz\nGenerated: .abccssrc\n`;
      expect(ctx.stdout).to.equal(expected);
      expect(fse.mkdirpSync.calledOnce).to.equal(true);
      expect(fse.copySync.calledOnce).to.equal(true);
      expect(fse.outputFileSync.calledOnce).to.equal(true);
    });

  test
    .stdout()
    .stub(Env, "isExistFile", sinon.stub().returns(true))
    .stub(fse, "mkdirpSync", sinon.stub())
    .stub(fse, "copySync", sinon.stub())
    .stub(fse, "outputFileSync", sinon.stub())
    .command(["new", "path/to/css"])
    .it("runs new path/to/css", ctx => {
      const expected = `Generated: path/to/css\n`;
      expect(ctx.stdout).to.equal(expected);
      expect(fse.mkdirpSync.calledOnce).to.equal(true);
      expect(fse.copySync.calledOnce).to.equal(true);
      expect(fse.outputFileSync.called).to.equal(false);
    });
});
