import ProductModel from "../models/product.js";
import expressAsyncHandler from "express-async-handler";
export const createProductCtr = expressAsyncHandler(async (req, res, next) => {
  const { name, description, category, sizes, colors, user, price, totalQty } =
    req.body;
  // check is Product Exist
  const isExistProduct = await ProductModel.findOne({ name });
  if (isExistProduct) {
    throw new Error("Product is Already Exist");
  }
  const createdProduct = await ProductModel.create({
    name,
    description,
    category,
    sizes,
    colors,
    user: req.AuthUserId,
    price,
    totalQty,
  });
  // push product to category

  res.json({
    state: "success",
    message: "product created successfully",
    product: createdProduct,
  });
});
