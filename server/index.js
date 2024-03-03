require("dotenv").config();
const express = require("express");
const router = require("./routers/index.js");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ErrorMidleware = require("./middlewares/ErrorMidleware.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.static("static"));
app.use("/api", router);
app.use(cookieParser());
app.use(cors());
app.use(ErrorMidleware);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:root@cluster0.avjsghl.mongodb.net/",
      {}
    );
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
