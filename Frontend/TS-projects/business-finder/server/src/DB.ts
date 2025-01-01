import mongoose from "mongoose";

const connectDB = () => {
  if (process.env.URI) {
    mongoose
      .connect(process.env.URI)
      .then(() => console.log("Successfully Connected to DB"))
      .catch((err) => console.error("Connection to DB failed", err));
  } else {
    console.error("DB_URI environment variable is not defined");
  }
};

export default connectDB;
