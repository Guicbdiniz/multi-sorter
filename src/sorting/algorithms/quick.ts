import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class QuickSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sortedArray = [...array];

    let stack: number[] = [];

    stack.push(0);
    stack.push(sortedArray.length - 1);

    while (stack[stack.length - 1] >= 0) {
      let end = stack.pop() as number;
      let start = stack.pop() as number;

      let pivotIndex = this.partition(sortedArray, start, end);

      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      }

      if (pivotIndex + 1 < end) {
        stack.push(pivotIndex + 1);
        stack.push(end);
      }
    }

    return sortedArray;
  }

  partition(array: number[], start: number, end: number) {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

    return pivotIndex;
  }

  public getType(): sortingAlgorithm {
    return "quick";
  }
}
