const app = require("express")();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

if (dotenv.error) {
  throw new Error(dotenv.error);
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
