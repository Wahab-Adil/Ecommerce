import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createColor,
  getAllColors,
  getSingleColor,
} from "../controllers/colorCtr.js";

const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, createColor);
colorRouter.get("/", getAllColors);
colorRouter.get("/:id", getSingleColor);

export default colorRouter;
