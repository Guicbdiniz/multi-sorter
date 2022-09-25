import { readFile } from "fs/promises";
import { InvalidFileContentError } from "./errors";

const NUMBERS_ONLY_REGEX = /(?:[\d]+[\s]*)+/g;
const MULTIPLE_WHITE_SPACES_REGEX = /[ \t]+/;

export class FileHandler {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  async readArrayFromFile(): Promise<number[]> {
    const fileData = await readFile(this.path, { encoding: "utf-8" });

    if (!FileHandler.fileDataIsValid(fileData)) {
      throw new InvalidFileContentError();
    }

    let array: number[] = [];
    for (let numberString of fileData.split(MULTIPLE_WHITE_SPACES_REGEX)) {
      array.push(parseInt(numberString));
    }

    return array;
  }

  static fileDataIsValid(data: string): boolean {
    return !!data.match(NUMBERS_ONLY_REGEX);
  }
}
