import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createColor } from "../controllers/colorCtr.js";

const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, createColor);

export default colorRouter;
