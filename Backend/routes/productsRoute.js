import express from "express";
import {
  createProductCtr,
  filterProduct,
  getAllProducts,
} from "../controllers/productCtr.js";
import isLoggedIn from "../middlewares/isloggedIn.js";

const productRouter = express.Router();

productRouter.post("/create", isLoggedIn, createProductCtr);
productRouter.get("/all", getAllProducts);
productRouter.get("/", filterProduct);

export default productRouter;
