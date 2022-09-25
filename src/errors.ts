export class InvalidNumberOfArgumentsError extends Error {
  constructor() {
    super("Invalid number of arguments.");
    this.name = "InvalidNumberOfArgumentsError";
  }
}

export class InvalidSortingAlgorithmError extends Error {
  constructor() {
    super("Invalid sorting algorithm.");
    this.name = "InvalidSortingAlgorithmError";
  }
}

export class InvalidFileContentError extends Error {
  constructor() {
    super("Invalid file content.");
    this.name = "InvalidFileContentError";
  }
}
