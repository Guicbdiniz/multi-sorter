import { sortingAlgorithm } from "./types";

export abstract class Sorter {
  public abstract sort(array: number[]): number[];

  public abstract getType(): sortingAlgorithm;
}
