import { Calculator } from "../src/utilities";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("should add two positive numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("should add positive and negative numbers", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test("should add zero", () => {
      expect(calculator.add(0, 5)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("should subtract two positive numbers", () => {
      expect(calculator.subtract(10, 3)).toBe(7);
    });

    test("should subtract resulting in negative", () => {
      expect(calculator.subtract(3, 10)).toBe(-7);
    });
  });

  describe("multiply", () => {
    test("should multiply two positive numbers", () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test("should multiply by zero", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test("should multiply negative numbers", () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });
  });

  describe("divide", () => {
    test("should divide two positive numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("should throw error on division by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        "Division by zero is not allowed",
      );
    });
  });

  describe("square", () => {
    test("should square a positive number", () => {
      expect(calculator.square(4)).toBe(16);
    });

    test("should square a negative number", () => {
      expect(calculator.square(-3)).toBe(9);
    });

    test("should square zero", () => {
      expect(calculator.square(0)).toBe(0);
    });
  });

  describe("power", () => {
    test("should calculate power with positive exponent", () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test("should calculate power with zero exponent", () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test("should calculate power with negative exponent", () => {
      expect(calculator.power(2, -2)).toBeCloseTo(0.25);
    });
  });
});
