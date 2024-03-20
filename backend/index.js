import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/products.route.js";
import salesRouter from "./routes/sales.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/sales", salesRouter);
app.use("/api/auth", userRouter);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
