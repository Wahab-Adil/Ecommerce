import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createCoupen,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupenCtr.js";
import isAdmin from "../middlewares/isAdmin.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, isAdmin, createCoupen);
brandRouter.get("/", getAllCoupons);
brandRouter.get("/:id", getSingleCoupon);
brandRouter.put("/update/:id", isLoggedIn, isAdmin, updateCoupon);
brandRouter.delete("/:id", isLoggedIn, isAdmin, deleteCoupon);

export default brandRouter;
