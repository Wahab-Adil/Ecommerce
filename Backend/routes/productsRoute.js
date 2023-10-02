import express from "express";
import { createProductCtr } from "../controllers/productCtr.js";
import isLoggedIn from "../middlewares/isloggedIn.js";

const productRouter = express.Router();

productRouter.post("/create", isLoggedIn, createProductCtr);

export default productRouter;
