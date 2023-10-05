import expressAsyncHandler from "express-async-handler";
import categoryModel from "../models/category.js";

//  logic For  create category

// @-desc-  creating category
// @route - api/category/create
// @access  Private/Admin
export const createCategory = expressAsyncHandler(async (req, res) => {
  const { name, image, products } = req.body;

  const isExistedCategory = await categoryModel.findOne({ name });
  if (isExistedCategory) {
    throw new Error("category already Exist !");
  }

  const createdCategory = await categoryModel.create({
    name,
    user: req.AuthUserId,
  });

  if (!createdCategory) {
    res.json({ status: "failed", message: "Category not Created" });
  }
  res.json({
    status: "success",
    message: "Category succefully Created",
    category: createdCategory,
  });
});

//  logic For  fetch all category

// @-desc-  fetch categories
// @route - api/category/
// @access  Public

export const getAllCategories = expressAsyncHandler(async (req, res) => {
  const categories = await categoryModel.find({});
  if (!categories) {
    throw new Error("Categories not found");
  }
  res.json({ status: "success", categories });
});
