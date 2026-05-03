const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

// DB Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portfolio"
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// API
app.get("/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
