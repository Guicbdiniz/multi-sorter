"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_parser_1 = require("./args_parser");
class Main {
    static run() {
        const { filePath, sortingMethod, error, isHelp } = new args_parser_1.ArgsParser(process.argv).parse();
        if (error) {
            this.printErrorMessage(error);
            return;
        }
        if (isHelp) {
            this.printHelpMessage();
            return;
        }
        console.log(`Cool! File path: ${filePath}, Sorting method: ${sortingMethod}`);
    }
    static printErrorMessage(e) {
        console.error("\nInvalid command usage. Type <command> --help to get help message.");
        console.error(e.message);
    }
    static printHelpMessage() {
        console.log("\n\tWelcome to multi-sorter!\n\n" +
            "\tArguments: <full path to file with int array> <sorting method to be used>\n\n" +
            "\tFile with array must only have integers separated by one space character.\n\n" +
            "\tAvailable sorting algorithms: bubble, quick, shell, insert, select, merge;.\n");
    }
}
try {
    Main.run();
}
catch (e) {
    console.error("Error captured in Main.run(): ", e);
}
