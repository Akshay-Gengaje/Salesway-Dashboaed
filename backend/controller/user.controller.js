import validator from "validator";
import pool from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });
};

// login user
const loginUser = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    if (!identifier || !password) throw new Error("All fields must be filled");
    // Check if the user exists
    const user = await getUserByUsernameOrEmail(identifier);
    if (!user) {
      return res.status(404).json({ error: "User not found! Please signup" });
    }
    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect credentials" });
    }
    console.log(user)
    const token = createToken(user.insertId);
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Error logging in user" });
  }
};

// Signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validations
    if (!username || !email || !password)
      throw new Error("All fields must be filled");
    if (!validator.isEmail(email)) throw new Error("Invalid email address");
    if (!validator.isStrongPassword(password))
      throw new Error("Password is not strong");

    // Check if email already exists
    const emailExists = await checkUserExistence(email);
    if (emailExists) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Insert user into the database
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const [rows] = await pool.query(insertQuery, [username, email, hash]);
    const token = createToken(rows.insertId);
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error signing up user:", error);
    if (error.code === "ER_DUP_ENTRY") {
      // Handle duplicate entry error (e.g., email already exists)
      res.status(409).json({ error: "Duplicate entry" });
    } else {
      res
        .status(500)
        .json({ error: "Error signing up user", error: error.message });
    }
  }
};

const checkUserExistence = async (value) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await pool.query(query, [value]);
  return rows.length > 0;
};

const getUserByUsernameOrEmail = async (identifier) => {
  const query = "SELECT * FROM users WHERE username = ? OR email = ?";
  const [rows, fields] = await pool.query(query, [identifier, identifier]);
  return rows.length > 0 ? rows[0] : null;
};

export { loginUser, signupUser };
