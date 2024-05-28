import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import testRoute from "./routes/testRoute.js";
import dbConnect from "./utils/dbConnect.js";

dotenv.config();
dbConnect();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1", testRoute);
const PORT = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  res.send("test api");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
