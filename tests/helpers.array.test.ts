import { ArrayUtils } from "../src/helpers";

describe("ArrayUtils", () => {
  let arrayUtils: ArrayUtils;

  beforeEach(() => {
    arrayUtils = new ArrayUtils();
  });

  describe("max", () => {
    test("should return maximum value", () => {
      expect(arrayUtils.max([1, 5, 3, 2])).toBe(5);
    });

    test("should return single value", () => {
      expect(arrayUtils.max([42])).toBe(42);
    });

    test("should throw error for empty array", () => {
      expect(() => arrayUtils.max([])).toThrow();
    });
  });

  describe("min", () => {
    test("should return minimum value", () => {
      expect(arrayUtils.min([5, 1, 3, 2])).toBe(1);
    });

    test("should return single value", () => {
      expect(arrayUtils.min([42])).toBe(42);
    });

    test("should throw error for empty array", () => {
      expect(() => arrayUtils.min([])).toThrow();
    });
  });

  describe("sum", () => {
    test("should sum array values", () => {
      expect(arrayUtils.sum([1, 2, 3, 4])).toBe(10);
    });

    test("should handle empty array", () => {
      expect(arrayUtils.sum([])).toBe(0);
    });

    test("should sum negative numbers", () => {
      expect(arrayUtils.sum([-1, -2, -3])).toBe(-6);
    });
  });

  describe("average", () => {
    test("should calculate average", () => {
      expect(arrayUtils.average([2, 4, 6])).toBe(4);
    });

    test("should throw error for empty array", () => {
      expect(() => arrayUtils.average([])).toThrow();
    });
  });

  describe("unique", () => {
    test("should return unique values", () => {
      expect(arrayUtils.unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test("should handle array with unique values", () => {
      expect(arrayUtils.unique([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe("contains", () => {
    test("should return true when array contains value", () => {
      expect(arrayUtils.contains([1, 2, 3], 2)).toBe(true);
    });

    test("should return false when array does not contain value", () => {
      expect(arrayUtils.contains([1, 2, 3], 5)).toBe(false);
    });
  });
});
