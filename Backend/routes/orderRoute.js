import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import {
  createOrder,
  fetchAllOrders,
  fetchSingleOrder,
  updateOrderCtr,
  getOrderStatsCtr,
} from "../controllers/orderCtr.js";

const orderRouter = express.Router();

orderRouter.post("/create", isLoggedIn, createOrder);
orderRouter.put("/update/:id", isLoggedIn, updateOrderCtr);
orderRouter.get("/", isLoggedIn, fetchAllOrders);
orderRouter.get("/:id", fetchSingleOrder);
orderRouter.get("/sales/stats", getOrderStatsCtr);

export default orderRouter;
