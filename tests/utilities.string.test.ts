import { StringUtils } from "../src/utilities";

describe("StringUtils", () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe("reverse", () => {
    test("should reverse a simple string", () => {
      expect(stringUtils.reverse("hello")).toBe("olleh");
    });

    test("should reverse an empty string", () => {
      expect(stringUtils.reverse("")).toBe("");
    });

    test("should reverse a single character", () => {
      expect(stringUtils.reverse("a")).toBe("a");
    });
  });

  describe("isPalindrome", () => {
    test("should return true for a palindrome", () => {
      expect(stringUtils.isPalindrome("racecar")).toBe(true);
    });

    test("should return true for palindrome with spaces", () => {
      expect(stringUtils.isPalindrome("race car")).toBe(true);
    });

    test("should return false for non-palindrome", () => {
      expect(stringUtils.isPalindrome("hello")).toBe(false);
    });

    test("should return true for single character", () => {
      expect(stringUtils.isPalindrome("a")).toBe(true);
    });
  });

  describe("capitalize", () => {
    test("should capitalize first letter", () => {
      expect(stringUtils.capitalize("hello")).toBe("Hello");
    });

    test("should capitalize empty string", () => {
      expect(stringUtils.capitalize("")).toBe("");
    });

    test("should capitalize already capitalized string", () => {
      expect(stringUtils.capitalize("Hello")).toBe("Hello");
    });
  });

  describe("countOccurrences", () => {
    test("should count occurrences of substring", () => {
      expect(stringUtils.countOccurrences("hello world", "o")).toBe(2);
    });

    test("should return 0 for empty substring", () => {
      expect(stringUtils.countOccurrences("hello", "")).toBe(0);
    });

    test("should return 0 for non-existent substring", () => {
      expect(stringUtils.countOccurrences("hello", "xyz")).toBe(0);
    });
  });

  describe("removeWhitespace", () => {
    test("should remove all whitespace", () => {
      expect(stringUtils.removeWhitespace("hello world")).toBe("helloworld");
    });

    test("should return string without whitespace unchanged", () => {
      expect(stringUtils.removeWhitespace("helloworld")).toBe("helloworld");
    });
  });
});
