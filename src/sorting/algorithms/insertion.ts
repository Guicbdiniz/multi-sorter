import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class InsertionSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sortedArray = [...array];
    let n = sortedArray.length;

    for (let i = 1; i < n; i++) {
      let current = sortedArray[i];
      let j = i - 1;
      while (j > -1 && current < sortedArray[j]) {
        sortedArray[j + 1] = sortedArray[j];
        j--;
      }
      sortedArray[j + 1] = current;
    }

    return sortedArray;
  }
  public getType(): sortingAlgorithm {
    return "insertion";
  }
}
