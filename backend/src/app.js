import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default app;
