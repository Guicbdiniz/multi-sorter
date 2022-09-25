# multi-sorter

NodeJS command line program to sort an int array using multiple sorting algorithms.

It currently supports 6 different sorting algorithms: [bubble](https://en.wikipedia.org/wiki/Bubble_sort), [insertion](https://en.wikipedia.org/wiki/Insertion_sort), [merge](https://en.wikipedia.org/wiki/Merge_sort), [quick](https://en.wikipedia.org/wiki/Quicksort), [selection](https://en.wikipedia.org/wiki/Selection_sort) and [shell](https://en.wikipedia.org/wiki/Shellsort).

The repository was developed for an activity of the **Software Testing** subject, studied on 2022/2 in [PUC Minas](https://www.pucminas.br/main/Paginas/default.aspx). After finishing it, we must cover most part of the source code using unit tests (hence why TDD was not used).

## Installation

Simply build the application using the Typescript CLI:

´´´sh
npm run build
´´´

## Usage

To run the program, run the following command:

```sh
node dist/index.js <full path to file with int array> <sorting method to be used>
```

### File format

The file containing the integer array must contain only the numbers separated by space or tab.
