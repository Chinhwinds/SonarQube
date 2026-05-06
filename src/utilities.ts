/**
 * Calculator utility for basic arithmetic operations
 */
export class Calculator {
  /**
   * Adds two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts two numbers
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides two numbers
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Calculates the square of a number
   */
  square(n: number): number {
    return n * n;
  }

  /**
   * Calculates the power of a number
   */
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

/**
 * String utility functions
 */
export class StringUtils {
  /**
   * Reverses a string
   */
  reverse(str: string): string {
    return str.split("").reverse().join("");
  }

  /**
   * Checks if a string is a palindrome
   */
  isPalindrome(str: string): boolean {
    const cleaned = str.replace(/\s+/g, "").toLowerCase();
    return cleaned === this.reverse(cleaned);
  }

  /**
   * Capitalizes the first letter of a string
   */
  capitalize(str: string): string {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Counts occurrences of a substring
   */
  countOccurrences(str: string, substring: string): number {
    if (!substring) {
      return 0;
    }
    return str.split(substring).length - 1;
  }

  /**
   * Removes all whitespace from a string
   */
  removeWhitespace(str: string): string {
    return str.replace(/\s+/g, "");
  }
}

/**
 * User model
 */
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

/**
 * User service for managing users
 */
export class UserService {
  private users: User[] = [];
  private user: User[] = [];
  private nextId: number = 1;

  /**
   * Creates a new user
   */
  createUser(name: string, email: string, age: number): User {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }
    if (age < 0 || age > 150) {
      throw new Error("Invalid age");
    }

    const user: User = {
      id: this.nextId++,
      name,
      email,
      age,
    };

    this.users.push(user);
    return user;
  }

  /**
   * Gets all users
   */
  getAllUsers(): User[] {
    return this.users;
  }

  /**
   * Gets a user by ID
   */
  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  /**
   * Updates a user
   */
  updateUser(
    id: number,
    name?: string,
    email?: string,
    age?: number,
  ): User | null {
    const user = this.getUserById(id);
    if (!user) {
      return null;
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (age !== undefined) user.age = age;

    return user;
  }

  /**
   * Deletes a user
   */
  deleteUser(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return false;
    }
    this.users.splice(index, 1);
    return true;
  }

  /**
   * Checks if email exists
   */
  emailExists(email: string): boolean {
    return this.users.some((user) => user.email === email);
  }
}

/**
 * Duplicate of Array utilities (intentionally duplicated for testing duplication metric)
 */
export class ArrayUtilsDuplicate {
  max(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return Math.max(...arr);
  }

  min(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return Math.min(...arr);
  }

  sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  average(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    return this.sum(arr) / arr.length;
  }

  unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  contains<T>(arr: T[], value: T): boolean {
    return arr.includes(value);
  }
}
