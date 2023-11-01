import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import {
  createOrder,
  fetchAllOrders,
  fetchSingleOrder,
} from "../controllers/orderCtr.js";

const orderRouter = express.Router();

orderRouter.post("/create", isLoggedIn, createOrder);
orderRouter.get("/", isLoggedIn, fetchAllOrders);
orderRouter.get("/:id", fetchSingleOrder);

export default orderRouter;
