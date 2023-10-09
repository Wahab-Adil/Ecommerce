import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
} from "../controllers/brandCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createBrand);
brandRouter.get("/", getAllBrands);
brandRouter.get("/:id", getSingleBrand);
brandRouter.put("/update/:id", updateBrand);

export default brandRouter;
