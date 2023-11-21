import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import {
  createColor,
  getAllColors,
  getSingleColor,
  updateColor,
  deleteColor,
} from "../controllers/colorCtr.js";
import isAdmin from "../middlewares/isAdmin.js";

const colorRouter = express.Router();

colorRouter.post("/create", isLoggedIn, isAdmin, createColor);
colorRouter.get("/", getAllColors);
colorRouter.get("/:id", getSingleColor);
colorRouter.put("/update/:id", isLoggedIn, isAdmin, updateColor);
colorRouter.delete("/:id", isLoggedIn, isAdmin, deleteColor);

export default colorRouter;
