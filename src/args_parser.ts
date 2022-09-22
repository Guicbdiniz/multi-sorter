import {
  InvalidNumberOfArgumentsError,
  InvalidSortingAlgorithmError,
} from "./errors";
import { sortingAlgorithm, SORTING_ALGORITHMS } from "./sorting/types";

export class ArgsParser {
  private args: string[];

  constructor(args: string[]) {
    this.args = args;
  }

  parse(): ParserReturn {
    let error: Error | null = null;
    let isHelp: boolean = false;
    let filePath: string = "";
    let sortingMethod: sortingAlgorithm | "" = "";

    if (this.commandHasHelpOption()) {
      isHelp = true;
    } else if (this.commandHasCorrectNumberOfArguments()) {
      if (this.commandHasValidSortingAlgorithm()) {
        filePath = this.args[2];
        sortingMethod = this.args[3] as sortingAlgorithm;
      } else {
        error = new InvalidSortingAlgorithmError();
      }
    } else {
      error = new InvalidNumberOfArgumentsError();
    }

    return {
      error,
      filePath,
      sortingMethod,
      isHelp,
    };
  }

  commandHasHelpOption() {
    return this.args.length === 3 && this.args[2] === "--help";
  }

  commandHasCorrectNumberOfArguments() {
    return this.args.length === 4;
  }

  commandHasValidSortingAlgorithm() {
    const sortingAlgorithmArgument = this.args[3];
    return SORTING_ALGORITHMS.includes(sortingAlgorithmArgument);
  }
}

interface ParserReturn {
  error: Error | null;
  isHelp: boolean;
  filePath: string;
  sortingMethod: sortingAlgorithm | "";
}
