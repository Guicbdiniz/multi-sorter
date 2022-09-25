import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class BubbleSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sortedArray = [...array];
    const arrayLength = sortedArray.length;

    let isSwapped = false;

    for (let i = 0; i < arrayLength; i++) {
      isSwapped = false;

      for (let j = 0; j < arrayLength; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return sortedArray;
  }
  public getType(): sortingAlgorithm {
    return "bubble";
  }
}
