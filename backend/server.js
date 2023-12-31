import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import emailRoute from "./routes/emailRoute.js";
import axios from "axios";
import queryString from "query-string";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
const port = 3009;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000/", "https://book-manager-app-t7g0.onrender.com"]
}));

dotenv.config();

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL + "BookManager");
    console.log("Connection to DB is successful");
  } catch (error) {
    console.log(error);
  }
};

app.use("/user", userRoute);
app.use("/email", emailRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port: ${port}`);
});

