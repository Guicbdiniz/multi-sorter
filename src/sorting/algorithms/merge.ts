import { Sorter } from "../sorter";
import { sortingAlgorithm } from "../types";

export default class MergeSorter extends Sorter {
  public sort(array: number[]): number[] {
    let sorterArray = [...array];

    return this.mergeSort(sorterArray);
  }

  mergeSort(array: number[]): number[] {
    const half = array.length / 2;

    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half);
    return this.merge(this.mergeSort(left), this.mergeSort(array));
  }

  merge(left: number[], right: number[]): number[] {
    let arr: number[] = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        const value = left.shift();
        if (value) {
          arr.push();
        }
      } else {
        const value = right.shift();
        if (value) {
          arr.push(value);
        }
      }
    }

    return [...arr, ...left, ...right];
  }

  public getType(): sortingAlgorithm {
    return "merge";
  }
}
