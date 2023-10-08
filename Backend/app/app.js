// import modules
import express from "express";
import dotenv from "dotenv";
import dbConnection from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
import productRouter from "../routes/productsRoute.js";
import categoryRouter from "../routes/categroyRoute.js";
import brandRouter from "../routes/brandRoute.js";

// middalewares
import {
  globalErrorHandler,
  notFoundErrHandler,
} from "../middlewares/globalErrorHandler.js";

// calling express
const app = express();

// env config
dotenv.config();

// middlewares
app.use(express.json());

// routes
app.use("/api/user/", userRoutes);
app.use("/api/product/", productRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/brand/", brandRouter);

// catching Errors
app.use(notFoundErrHandler);
app.use(globalErrorHandler);

// calling DB Connection Function
dbConnection();

export default app;
