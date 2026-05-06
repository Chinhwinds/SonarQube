import { DateUtils } from "../src/helpers";

describe("DateUtils", () => {
  let dateUtils: DateUtils;

  beforeEach(() => {
    dateUtils = new DateUtils();
  });

  describe("daysBetween", () => {
    test("should calculate days between two dates", () => {
      const date1 = new Date("2024-01-01");
      const date2 = new Date("2024-01-05");
      expect(dateUtils.daysBetween(date1, date2)).toBe(4);
    });

    test("should return same result regardless of date order", () => {
      const date1 = new Date("2024-01-01");
      const date2 = new Date("2024-01-05");
      expect(dateUtils.daysBetween(date1, date2)).toBe(
        dateUtils.daysBetween(date2, date1),
      );
    });
  });

  describe("isLeapYear", () => {
    test("should return true for divisible by 400", () => {
      expect(dateUtils.isLeapYear(2000)).toBe(true);
    });

    test("should return true for divisible by 4 but not 100", () => {
      expect(dateUtils.isLeapYear(2024)).toBe(true);
    });

    test("should return false for divisible by 100 but not 400", () => {
      expect(dateUtils.isLeapYear(1900)).toBe(false);
    });

    test("should return false for not divisible by 4", () => {
      expect(dateUtils.isLeapYear(2023)).toBe(false);
    });
  });

  describe("formatDate", () => {
    test("should format date correctly", () => {
      const date = new Date("2024-01-05");
      expect(dateUtils.formatDate(date)).toMatch(/2024-01-0[45]/);
    });
  });

  describe("getAge", () => {
    test("should calculate correct age", () => {
      const birthDate = new Date();
      birthDate.setFullYear(birthDate.getFullYear() - 30);
      expect(dateUtils.getAge(birthDate)).toBe(30);
    });

    test("should handle birthday this year", () => {
      const today = new Date();
      const birthDate = new Date(
        today.getFullYear() - 25,
        today.getMonth(),
        today.getDate(),
      );
      expect(dateUtils.getAge(birthDate)).toBe(25);
    });
  });
});
