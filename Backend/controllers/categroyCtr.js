import expressAsyncHandler from "express-async-handler";
import categoryModel from "../models/category.js";

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
