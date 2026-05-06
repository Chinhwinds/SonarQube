import { Validator } from "../src/helpers";

describe("Validator", () => {
  let validator: Validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe("isValidEmail", () => {
    test("should validate correct email", () => {
      expect(validator.isValidEmail("user@example.com")).toBe(true);
    });

    test("should reject email without @", () => {
      expect(validator.isValidEmail("userexample.com")).toBe(false);
    });

    test("should reject email without domain", () => {
      expect(validator.isValidEmail("user@")).toBe(false);
    });
  });

  describe("isValidPhone", () => {
    test("should validate 10-digit phone number", () => {
      expect(validator.isValidPhone("1234567890")).toBe(true);
    });

    test("should reject phone with non-digits", () => {
      expect(validator.isValidPhone("123-456-7890")).toBe(false);
    });

    test("should reject phone with less than 10 digits", () => {
      expect(validator.isValidPhone("123456789")).toBe(false);
    });
  });

  describe("isValidUrl", () => {
    test("should validate correct URL", () => {
      expect(validator.isValidUrl("https://example.com")).toBe(true);
    });

    test("should reject invalid URL", () => {
      expect(validator.isValidUrl("not a url")).toBe(false);
    });
  });

  describe("isStrongPassword", () => {
    test("should validate strong password", () => {
      expect(validator.isStrongPassword("MyPass123")).toBe(true);
    });

    test("should reject password with no uppercase", () => {
      expect(validator.isStrongPassword("mypass123")).toBe(false);
    });

    test("should reject password with no lowercase", () => {
      expect(validator.isStrongPassword("MYPASS123")).toBe(false);
    });

    test("should reject password with no digits", () => {
      expect(validator.isStrongPassword("MyPasswd")).toBe(false);
    });

    test("should reject password less than 8 characters", () => {
      expect(validator.isStrongPassword("Pass12")).toBe(false);
    });
  });
});
