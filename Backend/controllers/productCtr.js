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

//  logic For  filtering  Products

// @-desc-  filter product
// @route - api/product/ ?value
// @access  Public

export const filterProduct = expressAsyncHandler(async (req, res, next) => {
  let filterdProducts = ProductModel.find();

  // filtering products by product name
  if (req.query.name) {
    filterdProducts = filterdProducts.find({
      name: { $regex: new RegExp(req.query.name, "i") },
    });
  }
  // filtering products by color
  if (req.query.color) {
    filterdProducts = filterdProducts.find({
      colors: { $regex: new RegExp(req.query.color, "i") },
    });
  }
  // filtering products by brand
  if (req.query.brand) {
    filterdProducts = filterdProducts.find({
      brand: { $regex: new RegExp(req.query.brand, "i") },
    });
  }
  // filtering products by size
  if (req.query.size) {
    filterdProducts = filterdProducts.find({
      size: { $regex: new RegExp(req.query.brand, "i") },
    });
  }
  // filtering products by category
  if (req.query.category) {
    filterdProducts = filterdProducts.find({
      category: { $regex: new RegExp(req.query.category, "i") },
    });
  }
  // filtering product by price
  if (req.query.price) {
    // spliting price range
    const priceRange = req.query.price.split("-");
    // less then and equal
    const lte = priceRange[0];
    // greater then and equal
    const gte = priceRange[1];
    // check if product equal to price range user Mentioned
    filterdProducts = filterdProducts.find({
      price: { $gte: lte, $lte: gte },
    });
  }

  // final result of filterd product
  const products = await filterdProducts;

  res.json({ status: "success", filterProducts: products });
});
