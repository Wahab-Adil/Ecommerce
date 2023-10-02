import express from "express";
import { createProductCtr, getAllProducts } from "../controllers/productCtr.js";
import isLoggedIn from "../middlewares/isloggedIn.js";

const productRouter = express.Router();

productRouter.post("/create", isLoggedIn, createProductCtr);
productRouter.get("/all", getAllProducts);

export default productRouter;
