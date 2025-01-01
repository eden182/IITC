import path from "path";
// import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB";
// import cookieParser from "cookie-parser.ts";
import userRoutes from "./Routes/UserRoute";
// import { v2 as cloudinary } from "cloudinary";
const app = express();
const PORT = 3000;

dotenv.config();
connectDB();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(cookieParser());

// app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/")));

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
