require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");
const fs = require("fs");

const app = express();
const FRONTEND_URL = "http://localhost:5000";
const SECRET_KEY = "harshit-secret";
const otpMap = new Map(); // email -> otp mapping




// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));


// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "auth_system",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// ✅ Google Sheets API
const SHEET_ID = "18LgVVZuXz6CoXVOXdEUlQNDCMdhrGOuwIN7lCCwuC48";
const KEY_FILE = "sheets-key.json";

async function addToSpreadsheet(data) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "portfolio_contact!A:D",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[data.name, data.email, data.message, new Date().toLocaleString()]],
      },
    });

    console.log("✅ Data successfully added to Google Sheets!");
  } catch (error) {
    console.error("❌ Google Sheets API Error:", error);
    throw new Error("Error saving message to Google Sheets.");
  }
}

// ✅ Contact Form Route
app.post("/submit-form", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], async (err, result) => {
    if (err) return res.status(500).json({ error: "Database error!" });

    try {
      await addToSpreadsheet({ name, email, message });
      res.status(201).json({ message: "Message saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error saving message to Google Sheets." });
    }
  });
});

// ✅ Sign-Up Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const checkUserSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserSql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error!" });
    if (results.length > 0) return res.status(400).json({ error: "Email already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error!" });
      res.status(201).json({ message: "User registered successfully!" });
    });
  });
});

// ✅ Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error!" });
    if (results.length === 0) return res.status(401).json({ error: "User not found!" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password!" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({
      message: "Login successful!",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  });
});

// ✅ Logout Route
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(FRONTEND_URL);
  });
});

// ✅ Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
