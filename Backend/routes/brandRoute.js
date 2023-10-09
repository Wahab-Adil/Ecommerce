import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createBrand,
  getAllBrands,
  getSingleBrand,
} from "../controllers/brandCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createBrand);
brandRouter.get("/", getAllBrands);
brandRouter.get("/:id", getSingleBrand);

export default brandRouter;
