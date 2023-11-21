import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brandCtr.js";
import isAdmin from "../middlewares/isAdmin.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, isAdmin, createBrand);
brandRouter.get("/", getAllBrands);
brandRouter.get("/:id", getSingleBrand);
brandRouter.put("/update/:id", isLoggedIn, isAdmin, updateBrand);
brandRouter.delete("/:id", isLoggedIn, isAdmin, deleteBrand);

export default brandRouter;
