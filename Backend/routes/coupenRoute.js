import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createCoupen,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupenCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createCoupen);
brandRouter.get("/", isLoggedIn, getAllCoupons);
brandRouter.get("/:id", isLoggedIn, getSingleCoupon);
brandRouter.put("/update/:id", isLoggedIn, updateCoupon);
brandRouter.delete("/:id", isLoggedIn, deleteCoupon);

export default brandRouter;
