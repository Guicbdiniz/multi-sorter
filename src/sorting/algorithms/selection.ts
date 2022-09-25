import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class SelectionSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sortedArray = [...array];
    let arrayLength = sortedArray.length;

    for (let i = 0; i < arrayLength; i++) {
      let min = i;

      for (let j = i + 1; j < arrayLength; j++) {
        if (sortedArray[j] < sortedArray[min]) {
          min = j;
        }
      }

      if (min != i) {
        let tmp = sortedArray[i];
        sortedArray[i] = sortedArray[min];
        sortedArray[min] = tmp;
      }
    }

    return sortedArray;
  }

  public getType(): sortingAlgorithm {
    return "selection";
  }
}
