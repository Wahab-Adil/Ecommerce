import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import { createOrder, fetchAllOrders } from "../controllers/orderCtr.js";

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createOrder);
orderRouter.get("/", isLoggedIn, fetchAllOrders);

export default orderRouter;
