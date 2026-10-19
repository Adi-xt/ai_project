
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");
const interviewRoutes = require("./routes/interview");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Google Login
app.use("/api/auth", authRoutes);

// Manual Login
app.use("/api/auth", loginRoutes);

// Manual Signup
app.use("/api/auth", signupRoutes);

// Interview Routes
app.use("/api", interviewRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/db")
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((error) => {
    console.log("MongoDB Error:", error);
  });
