import express from "express";
import {
  createProductCtr,
  getAllProducts,
  filterProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productCtr.js";
import isLoggedIn from "../middlewares/isloggedIn.js";
import upload from "../config/fileUpload.js";

const productRouter = express.Router();
// create product
productRouter.post(
  "/create",
  isLoggedIn,
  upload.array("files"),
  createProductCtr
);
// update product
productRouter.put("/update/:id", isLoggedIn, updateProduct);
// get single product
productRouter.get("/:id", getSingleProduct);
// get all product
productRouter.get("/all", getAllProducts);
// filter product
productRouter.get("/", filterProduct);
// filter product
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
