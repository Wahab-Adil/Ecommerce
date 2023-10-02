import productModel from "../models/product.js";
import ProductModel from "../models/product.js";
import expressAsyncHandler from "express-async-handler";

//  logic For  create product

// @-desc-  creating product
// @route - api/product/create
// @access  Private/Admin

export const createProductCtr = expressAsyncHandler(async (req, res, next) => {
  const { name, description, brand, category, sizes, colors, price, totalQty } =
    req.body;
  // check is Product Exist
  const isExistProduct = await ProductModel.findOne({ name });
  if (isExistProduct) {
    throw new Error("Product is Already Exist");
  }

  const createdProduct = await ProductModel.create({
    user: req.AuthUserId,
    name,
    description,
    brand,
    category,
    sizes,
    colors,
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

//  logic For  fetch all Product

// @-desc-  fetch product
// @route - api/product
// @access  Public

export const getAllProducts = expressAsyncHandler(async (req, res, next) => {
  const allProducts = await productModel.find({});
  if (allProducts) {
    res.json({ status: "success", products: allProducts });
  } else {
    throw new Error("No Products Avaliable");
  }
});
