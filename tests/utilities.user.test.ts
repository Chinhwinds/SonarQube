import { UserService } from "../src/utilities";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe("createUser", () => {
    test("should create a new user", () => {
      const user = userService.createUser("John Doe", "john@example.com", 30);
      expect(user.id).toBe(1);
      expect(user.name).toBe("John Doe");
      expect(user.email).toBe("john@example.com");
      expect(user.age).toBe(30);
    });

    test("should throw error when name is missing", () => {
      expect(() =>
        userService.createUser("", "john@example.com", 30),
      ).toThrow();
    });

    test("should throw error when email is missing", () => {
      expect(() => userService.createUser("John", "", 30)).toThrow();
    });

    test("should throw error for negative age", () => {
      expect(() =>
        userService.createUser("John", "john@example.com", -1),
      ).toThrow();
    });

    test("should throw error for age over 150", () => {
      expect(() =>
        userService.createUser("John", "john@example.com", 151),
      ).toThrow();
    });

    test("should increment user ID", () => {
      const user1 = userService.createUser("User 1", "user1@example.com", 25);
      const user2 = userService.createUser("User 2", "user2@example.com", 30);
      expect(user2.id).toBe(user1.id + 1);
    });
  });

  describe("getAllUsers", () => {
    test("should return empty array initially", () => {
      expect(userService.getAllUsers()).toEqual([]);
    });

    test("should return all created users", () => {
      userService.createUser("User 1", "user1@example.com", 25);
      userService.createUser("User 2", "user2@example.com", 30);
      expect(userService.getAllUsers().length).toBe(2);
    });
  });

  describe("getUserById", () => {
    test("should return user with matching ID", () => {
      const user = userService.createUser("John", "john@example.com", 30);
      const retrieved = userService.getUserById(user.id);
      expect(retrieved).toEqual(user);
    });

    test("should return undefined for non-existent ID", () => {
      expect(userService.getUserById(999)).toBeUndefined();
    });
  });

  describe("updateUser", () => {
    test("should update user name", () => {
      const user = userService.createUser("John", "john@example.com", 30);
      const updated = userService.updateUser(user.id, "Jane");
      expect(updated?.name).toBe("Jane");
    });

    test("should return null for non-existent user", () => {
      expect(userService.updateUser(999)).toBeNull();
    });
  });

  describe("deleteUser", () => {
    test("should delete existing user", () => {
      const user = userService.createUser("John", "john@example.com", 30);
      expect(userService.deleteUser(user.id)).toBe(true);
      expect(userService.getUserById(user.id)).toBeUndefined();
    });

    test("should return false for non-existent user", () => {
      expect(userService.deleteUser(999)).toBe(false);
    });
  });

  describe("emailExists", () => {
    test("should return true for existing email", () => {
      userService.createUser("John", "john@example.com", 30);
      expect(userService.emailExists("john@example.com")).toBe(true);
    });

    test("should return false for non-existent email", () => {
      expect(userService.emailExists("nonexistent@example.com")).toBe(false);
    });
  });
});
