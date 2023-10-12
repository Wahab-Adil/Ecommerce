import categoryModel from "../models/category.js";
import productModel from "../models/product.js";
import brandModel from "../models/brand.js";
import expressAsyncHandler from "express-async-handler";

//  logic For  create product

// @-desc-  creating product
// @route - api/product/create
// @access  Private/Admin

export const createProductCtr = expressAsyncHandler(async (req, res, next) => {
  const { name, description, brand, category, sizes, colors, price, totalQty } =
    req.body;
  // check is Product Exist
  const isExistProduct = await productModel.findOne({ name });
  if (isExistProduct) {
    throw new Error("Product is Already Exist");
  }

  // find Existing category
  const foundCategory = await categoryModel.findOne({
    name: category.toLowerCase(),
  });
  // find Existing brand
  const foundBrand = await brandModel.findOne({
    name: brand.toLowerCase(),
  });
  console.log(category, foundCategory);
  if (!foundCategory) {
    throw new Error(
      "Category not found,please create category first or check category name"
    );
  }
  if (!foundBrand) {
    throw new Error(
      "Brand not found,please create Brand first or check Brand name"
    );
  }

  const createdProduct = await productModel.create({
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
  foundCategory.products.push(createdProduct._id);

  // after pushing product to category let save it again
  await foundCategory.save();

  // push product to brand
  foundBrand.products.push(createdProduct._id);

  // after pushing product to brand let save it again
  await foundBrand.save();

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

//  logic For  filtering  Products with pagination

// @-desc-  filter product
// @route - api/product/ ?value
// @access  Public

export const filterProduct = expressAsyncHandler(async (req, res, next) => {
  let filterdProducts = productModel.find();

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

  console.log(req.query.limit);
  // pagination
  //  mentioned page
  const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  //  mentioned limit
  const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
  console.log(page, "page", "limit", limit);
  // first -index
  const startIndex = (page - 1) * limit;
  // last- Index
  const endIndex = page * limit;
  // total Records
  const total = await productModel.countDocuments();

  // paginate products with mentioned queries
  filterdProducts = filterdProducts.skip(startIndex).limit(limit);

  // pagination result
  const paginationResult = {};

  if (startIndex > 0) {
    paginationResult.prev = {
      page: page - 1,
      limit,
    };
  }
  if (endIndex < total) {
    paginationResult.next = {
      page: page + 1,
      limit,
    };
  }

  // final result of filterd product
  const products = await filterdProducts;

  res.json({
    status: "success",
    total,
    results: products.length,
    paginationResult,
    filterProducts: products,
    message: "product fetced successfully",
  });
});

//  logic For  fetching  single Product

// @-desc-  fetching SinglePRoduct
// @route - api/product/:id
// @access  Public

export const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const singleProduct = await productModel.findById({ _id: id });
  if (!singleProduct) {
    throw new Error("Product not Found");
  }
  res.json({ status: "success", result: singleProduct });
});

//  logic For  updating  single Product

// @-desc-  fetching SinglePRoduct
// @route - api/product/update/:id
// @access  Private/Admin

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { name, description, brand, category, sizes, colors, price, totalQty } =
    req.body;

  const exsitedProduct = await productModel.findByIdAndUpdate(
    _id,
    {
      name,
      description,
      brand,
      category,
      user: req.AuthUserId,
      sizes,
      colors,
      price,
      totalQty,
    },
    { new: true }
  );
  console.log(req.AuthUserId);

  const updatedProduct = await exsitedProduct.save();
  if (!exsitedProduct) {
    throw new Error("product not found");
  }
  res.json({ status: "success", product: updatedProduct });
});

//  logic For  deleting  single Product

// @-desc-  delete SinglePRoduct
// @route - api/product/delete/:id
// @access  Private/Admin

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const isDeletedProduct = await productModel.findByIdAndDelete({ _id });

  if (!isDeletedProduct) {
    throw new Error("Product already deleted or Not Exist !");
  }
  res.json({ status: "success", message: "product deleted successfully !" });
});
