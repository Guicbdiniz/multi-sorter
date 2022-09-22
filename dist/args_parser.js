"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgsParser = void 0;
const errors_1 = require("./errors");
const types_1 = require("./sorting/types");
class ArgsParser {
    constructor(args) {
        this.args = args;
    }
    parse() {
        let error = null;
        let isHelp = false;
        let filePath = "";
        let sortingMethod = "";
        if (this.commandHasHelpOption()) {
            isHelp = true;
        }
        else if (this.commandHasCorrectNumberOfArguments()) {
            if (this.commandHasValidSortingAlgorithm()) {
                filePath = this.args[2];
                sortingMethod = this.args[3];
            }
            else {
                error = new errors_1.InvalidSortingAlgorithmError();
            }
        }
        else {
            error = new errors_1.InvalidNumberOfArgumentsError();
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
        return types_1.SORTING_ALGORITHMS.includes(sortingAlgorithmArgument);
    }
}
exports.ArgsParser = ArgsParser;
