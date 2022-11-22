const { describe, expect } = require("@jest/globals");
const { FileHandler } = require("../file_handler");

describe("fileDataIsValid", () => {
  test("should identify invalid array", () => {
    const result = FileHandler.fileDataIsValid("asjasdiansd");
    expect(result).toBeFalsy();
  });

  test("should identify valid array", () => {
    const result = FileHandler.fileDataIsValid("3189238109283109283");
    expect(result).toBeTruthy();
  });
});
