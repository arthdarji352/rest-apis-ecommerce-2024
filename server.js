import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import testRoute from "./routes/testRoute.js";
import userRoute from "./routes/userRoutes.js";
import dbConnect from "./config/dbConnect.js";

dotenv.config();
dbConnect();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use("/api/v1", testRoute);
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  res.send("test api");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
