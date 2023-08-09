// Required modules for the User Model tests
const bcrypt = require("bcrypt");
const User = require("../models/User");

// User Model tests
describe("User Model", () => {
    
    // Mock user data for our tests
    const mockUser = {
        userName: "testUser",
        email: "test@example.com",
        password: bcrypt.hashSync("password123", 10)
    };

    // Test Case 1: Checking correct password
    test("comparePassword should return true for correct passwords", async () => {
        // Given: We have a user with a hashed password
        const user = new User(mockUser);

        // When: We try to compare with the correct password
        const isMatch = await new Promise((resolve, reject) => {
            user.comparePassword("password123", (err, match) => {
                if (err) reject(err);
                resolve(match);
            });
        });

        // Then: It should return true
        expect(isMatch).toBe(true);
    });

    // Test Case 2: Checking incorrect password
    test("comparePassword should return false for incorrect passwords", async () => {
        // Given: We have a user with a hashed password
        const user = new User(mockUser);

        // When: We try to compare with an incorrect password
        const isMatch = await new Promise((resolve, reject) => {
            user.comparePassword("wrongPassword", (err, match) => {
                if (err) reject(err);
                resolve(match);
            });
        });

        // Then: It should return false
        expect(isMatch).toBe(false);
    });
});
