import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class ShellSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sortedArray = [...array];

    var increment = sortedArray.length / 2;

    while (increment > 0) {
      for (let i = increment; i < sortedArray.length; i++) {
        var j = i;
        var temp = sortedArray[i];

        while (j >= increment && sortedArray[j - increment] > temp) {
          sortedArray[j] = sortedArray[j - increment];
          j = j - increment;
        }

        sortedArray[j] = temp;
      }

      if (increment == 2) {
        increment = 1;
      } else {
        increment = Math.trunc((increment * 5) / 11);
      }
    }

    return sortedArray;
  }

  public getType(): sortingAlgorithm {
    return "shell";
  }
}
