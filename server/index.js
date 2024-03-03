import {} from "dotenv/config";
import express from "express";
import router from "./routers/index.js";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.static("static"));
app.use("/api", router);
app.use(cookieParser());
app.use(cors());

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
