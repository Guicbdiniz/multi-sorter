import { ArgsParser } from "./args_parser";
import { FileHandler } from "./file_handler";
import { SorterSelector } from "./sorting/sorter_selector";
import { sortingAlgorithm } from "./sorting/types";

class Main {
  async run() {
    const { filePath, sortingMethod, error, isHelp } = new ArgsParser(
      process.argv
    ).parse();

    if (error) {
      Main.printErrorMessage(error);
      return;
    }

    if (isHelp) {
      Main.printHelpMessage();
      return;
    }

    const arrayToBeSorted = await new FileHandler(filePath).readArrayFromFile();

    Main.printArrayWithMessage("Array to be sorted: ", arrayToBeSorted);

    const sorter = new SorterSelector(
      sortingMethod as sortingAlgorithm
    ).getSorter();

    const arrayAfterSorting = sorter.sort(arrayToBeSorted);

    Main.printArrayWithMessage("Array after being sorted: ", arrayAfterSorting);
  }

  static printErrorMessage(e: Error) {
    console.error(
      "\nInvalid command usage. Type <command> --help to get help message."
    );
    console.error(e.message);
  }

  static printHelpMessage() {
    console.log(
      "\n\tWelcome to multi-sorter!\n\n" +
        "\tArguments: <full path to file with int array> <sorting method to be used>\n\n" +
        "\tFile with array must only have integers separated by one space character.\n\n" +
        "\tAvailable sorting algorithms: bubble, quick, shell, insertion, selection, merge;.\n"
    );
  }

  static printArrayWithMessage(message: string, array: number[]) {
    console.log("\n", message, array);
  }
}

try {
  new Main().run();
} catch (e) {
  console.error("Error captured in Main.run(): ", e);
}
