import express from "express";
import {
  createProductCtr,
  getAllProducts,
  filterProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/productCtr.js";
import isLoggedIn from "../middlewares/isloggedIn.js";

const productRouter = express.Router();
// create product
productRouter.post("/create", isLoggedIn, createProductCtr);
// update product
productRouter.post("/update/:id", isLoggedIn, updateProduct);
// get single product
productRouter.get("/:id", getSingleProduct);
// get all product
productRouter.get("/all", getAllProducts);
// filter product
productRouter.get("/", filterProduct);

export default productRouter;
