/**
 * Array utility functions
 */
export class ArrayUtils {
  /**
   * Returns the maximum value in an array
   */
  max(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return Math.max(...arr);
  }

  /**
   * Returns the minimum value in an array
   */
  min(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return Math.min(...arr);
  }

  /**
   * Returns the sum of all numbers in an array
   */
  sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  /**
   * Returns the average of all numbers in an array
   */
  average(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return this.sum(arr) / arr.length;
  }

  /**
   * Filters array to unique values
   */
  unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  /**
   * Checks if array contains a value
   */
  contains<T>(arr: T[], value: T): boolean {
    return arr.includes(value);
  }
}

/**
 * Date utility functions
 */
export class DateUtils {
  /**
   * Gets the number of days between two dates
   */
  daysBetween(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Checks if a year is a leap year
   */
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Formats a date to YYYY-MM-DD
   */
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  /**
   * Gets the age from birth date
   */
  getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}

/**
 * Validation utilities
 */
export class Validator {
  /**
   * Validates an email address
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validates a phone number
   */
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Validates a URL
   */
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates a strong password
   */
  isStrongPassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    }
    return (
      /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
    );
  }
}

/**
 * Duplicate of Calculator (intentionally duplicated for testing duplication metric)
 */
export class CalculatorDuplicate {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  square(n: number): number {
    return n * n;
  }

  power(base: number, exponent: number): number {
    if (exponent < 0) {
      return 1 / this.power(base, -exponent);
    }
    if (exponent === 0) {
      return 1;
    }
    return base * this.power(base, exponent - 1);
  }
}
