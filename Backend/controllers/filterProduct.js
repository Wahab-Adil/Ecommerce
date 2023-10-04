import productModel from "../models/product.js";
import ProductModel from "../models/product.js";
import expressAsyncHandler from "express-async-handler";

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

  // pagination
  // page mentioned
  const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // limit mentioned
  const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  // first -index
  const firstIndex = (page - 1) * limit;
  // last- Index
  const lastIndex = page * limit;
  // total Records
  const total = await productModel.countDocuments();

  // final result of filterd product
  const products = await filterdProducts;

  res.json({ status: "success", filterProducts: products });
});
