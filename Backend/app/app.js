import express from "express";
import dotenv from "dotenv";
import dbConnection from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";

// calling express
const app = express();

// env config
dotenv.config();

// middlewares
app.use(express.json());
app.use("/api/", userRoutes);
// calling DB Connection Function
dbConnection();

export default app;
