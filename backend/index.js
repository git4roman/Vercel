// backend/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Sample data
let users = [
  { id: 1, name: "Nisung Kerung" },
  { id: 2, name: "Biddhan Pokhrel" },
  {id: 3, name: "Roman Ghimire},
];
app.get("/", (req, res) => {
 res.json({msg: "Hello"});
});
// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Add a new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
