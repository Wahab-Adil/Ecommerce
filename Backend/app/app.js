import express from "express";
import dotenv from "dotenv";
import dbConnection from "../config/dbConnect.js";

// env config
dotenv.config();

// calling DB Connection Function
dbConnection();

// calling express
const app = express();
export default app;
