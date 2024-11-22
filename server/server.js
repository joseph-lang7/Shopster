import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes)
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

