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
import isAdmin from "../middlewares/isAdmin.js";
import upload from "../config/fileUpload.js";

const productRouter = express.Router();
// create product
productRouter.post(
  "/create",
  isLoggedIn,
  isAdmin,
  upload.array("files"),
  createProductCtr
);
// update product
productRouter.put("/update/:id", isLoggedIn, isAdmin, updateProduct);
// get single product
productRouter.get("/:id", getSingleProduct);
// get all product
productRouter.get("/all", getAllProducts);
// filter product
productRouter.get("/", filterProduct);
// filter product
productRouter.delete("/delete/:id", isLoggedIn, isAdmin, deleteProduct);

export default productRouter;
