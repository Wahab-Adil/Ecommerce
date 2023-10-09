import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createColor, getAllColors } from "../controllers/colorCtr.js";

const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, createColor);
colorRouter.get("/", getAllColors);

export default colorRouter;
