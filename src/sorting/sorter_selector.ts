import BubbleSorter from "./algorithms/bubble";
import InsertionSorter from "./algorithms/insertion";
import MergeSorter from "./algorithms/merge";
import QuickSorter from "./algorithms/quick";
import SelectionSorter from "./algorithms/selection";
import ShellSorter from "./algorithms/shell";
import { Sorter } from "./sorter";
import { sortingAlgorithm } from "./types";

export class SorterSelector {
  private type: sortingAlgorithm;

  constructor(type: sortingAlgorithm) {
    this.type = type;
  }

  getSorter(): Sorter {
    switch (this.type) {
      case "bubble":
        return new BubbleSorter();
      case "insertion":
        return new InsertionSorter();
      case "merge":
        return new MergeSorter();
      case "quick":
        return new QuickSorter();
      case "selection":
        return new SelectionSorter();
      case "shell":
        return new ShellSorter();
    }
  }
}
