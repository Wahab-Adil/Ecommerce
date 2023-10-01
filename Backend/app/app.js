import express from "express";
import dotenv from "dotenv";
import dbConnection from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
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
app.use(process.env.BASE_URL, userRoutes);
// catching Errors
app.use(notFoundErrHandler);
app.use(globalErrorHandler);

// calling DB Connection Function
dbConnection();

export default app;
