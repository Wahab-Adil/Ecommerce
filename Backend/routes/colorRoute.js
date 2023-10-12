import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import {
  createColor,
  getAllColors,
  getSingleColor,
  updateColor,
  deleteColor,
} from "../controllers/colorCtr.js";


const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, createColor);
colorRouter.get("/", getAllColors);
colorRouter.get("/:id", getSingleColor);
colorRouter.put("/update/:id", updateColor);
colorRouter.delete("/:id", deleteColor);


export default colorRouter;
