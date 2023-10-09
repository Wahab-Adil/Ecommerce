import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createColor,
  getAllColors,
  getSingleColor,
  updateColor,
} from "../controllers/colorCtr.js";

const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, createColor);
colorRouter.get("/", getAllColors);
colorRouter.get("/:id", getSingleColor);
colorRouter.put("/update/:id", updateColor);

export default colorRouter;
