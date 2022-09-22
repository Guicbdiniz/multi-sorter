"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidSortingAlgorithmError = exports.InvalidNumberOfArgumentsError = void 0;
class InvalidNumberOfArgumentsError extends Error {
    constructor() {
        super("Invalid number of arguments.");
        this.name = "InvalidNumberOfArgumentsError";
    }
}
exports.InvalidNumberOfArgumentsError = InvalidNumberOfArgumentsError;
class InvalidSortingAlgorithmError extends Error {
    constructor() {
        super("Invalid sorting algorithm.");
        this.name = "InvalidSortingAlgorithmError";
    }
}
exports.InvalidSortingAlgorithmError = InvalidSortingAlgorithmError;
