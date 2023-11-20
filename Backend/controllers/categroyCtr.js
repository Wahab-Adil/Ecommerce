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
    name: name.toLowerCase(),
    user: req.AuthUserId,
    image: req.file.path,
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

//  logic For  fetch single category

// @-desc-  fetch category
// @route - api/category/:id
// @access  Public

export const getSingleCategory = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const foundCategory = await categoryModel.find({ _id });
  if (!foundCategory) {
    throw new Error("Category not found");
  }
  res.json({ status: "success", category: foundCategory });
});
//  logic For  update category

// @-desc-  update category
// @route - api/category/update/:id
// @access  Private/Admin

export const updateCategory = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { name } = req.body;
  const updatedCategory = await categoryModel.findByIdAndUpdate(
    _id,
    { name },
    { new: true }
  );
  if (!updatedCategory) {
    throw new Error("Category not updated");
  }
  res.json({ status: "success", category: updatedCategory });
});

//  logic For  delete category

// @-desc-  delete category
// @route - api/category/:id
// @access  Private/Admin

export const deleteCategory = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const isDeletedCategory = await categoryModel.findByIdAndDelete(_id);
  if (!isDeletedCategory) {
    throw new Error("Category Already deleted or doesn't Exist");
  }
  res.json({ status: "success", message: "Categroy deleted Successfully" });
});
