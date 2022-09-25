import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class MergeSorter extends Sorter {
  public sort(array: number[]): number[] {
    return array;
  }
  public getType(): sortingAlgorithm {
    return "merge";
  }
}
