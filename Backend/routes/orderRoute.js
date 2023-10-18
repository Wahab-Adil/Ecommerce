import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";

import { createOrder } from "../controllers/orderCtr.js";

const orderRouter = express.Router();

orderRouter.get("/", createOrder);

export default orderRouter;
