import express from "express";
import { createProductCtr } from "../controllers/productCtr.js";

const productRouter = express.Router();

productRouter.post("/create", createProductCtr);

export default productRouter;
