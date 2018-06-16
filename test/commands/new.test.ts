import { expect, test } from "@oclif/test";

describe("new", () => {
  test
    .stdout()
    .command(["new"])
    .it("runs new", ctx => {
      expect(ctx.stdout).to.contain(`Generated: ./
Generated: .abccssrc`);
    });

  test
    .stdout()
    .command(["new", "path/to/css"])
    .it("runs new path/to/css", ctx => {
      expect(ctx.stdout).to.equal(`Generated: path/to/css\n`);
    });
});
