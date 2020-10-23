const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "dev") {
  const dotenv = require("dotenv").config();
  if (dotenv.error) {
    throw new Error(dotenv.error);
  }
}

if (process.env.NODE_ENV === "production") {
  app.use('/', express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const start = async () => {
  try {
    app.use("/api", require("./routes/public"));
    app.use("/api", require("./routes/private"));
    await mongoose.connect(process.env.MONGO_DB_PATH, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Started on ${PORT}`);
    });
  } catch (e) {
    app.use("/api", (req, res) => {
      res.status(500).json({ message: "server error" });
    });
    process.exit(1);
  }
};

start();
