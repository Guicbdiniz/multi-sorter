import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class BubbleSorter extends Sorter {
  public sort(array: number[]): number[] {
    return array;
  }
  public getType(): sortingAlgorithm {
    return "bubble";
  }
}
