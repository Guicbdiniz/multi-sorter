const { expect, test } = require("@jest/globals");
const { ArgsParser } = require("../args_parser");

describe("ArgsParser", () => {
  let parser;

  test("should return error for invalid arguments", () => {
    parser = new ArgsParser(["invalid", "args"]);
    const { error, sortingMethod } = parser.parse();

    expect(error).not.toBeNull();
    expect(sortingMethod).toBe("");
  });

  test("should identify when help option is passed", () => {
    parser = new ArgsParser(["node", "path", "--help"]);
    const { error, isHelp } = parser.parse();

    expect(error).toBeNull();
    expect(isHelp).toBeTruthy();
  });

  test("should identify when invalid algorithm is requested", () => {
    parser = new ArgsParser(["node", "path", "path2", "bluble"]);
    const { error, sortingMethod } = parser.parse();

    expect(error).not.toBeNull();
    expect(sortingMethod).toBe("");
  });

  test("should identify when valid args are passed", () => {
    parser = new ArgsParser(["node", "path", "path2", "bubble"]);
    const { error, filePath, sortingMethod } = parser.parse();

    expect(error).toBeNull();
    expect(sortingMethod).toBe("bubble");
    expect(filePath).toBe("path2");
  });
});
