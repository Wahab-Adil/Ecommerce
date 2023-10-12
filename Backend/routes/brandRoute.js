import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brandCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createBrand);
brandRouter.get("/", getAllBrands);
brandRouter.get("/:id", getSingleBrand);
brandRouter.put("/update/:id", updateBrand);
brandRouter.delete("/:id", deleteBrand);

export default brandRouter;
