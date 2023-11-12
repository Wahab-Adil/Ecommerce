import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createCoupen, getAllCoupons } from "../controllers/coupenCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createCoupen);
brandRouter.get("/", isLoggedIn, getAllCoupons);

export default brandRouter;
