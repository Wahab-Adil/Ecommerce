import expressAsyncHandler from "express-async-handler";
import brandModel from "../models/brand.js";

//  logic For  create brand
// @-desc-  creating brand
// @route - api/brand/create
// @access  Private/Admin
export const createBrand = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;

  const ExistedBrand = await brandModel.findOne({ name });

  if (ExistedBrand) {
    throw new Error("Brand Already Exist !");
  }

  const brand = await brandModel.create({
    name: name.toLowerCase(),
    user: req.AuthUserId,
  });
  if (!brand) {
    throw new Error("Brand desn't created ");
  }
  res.json({ status: "success", message: "brand created successfylly !" });
});

//  logic For  fetch all brand
// @-desc-  fetch brands
// @route - api/brand/
// @access  public

export const getAllBrands = expressAsyncHandler(async (req, res) => {
  const AllBrands = await brandModel.find({});

  if (!AllBrands) {
    throw new Error("No Exisiting Brands !");
  }
  res.json({ status: "success", brands: AllBrands });
});

//  logic For  fetch single brand
// @-desc-  fetch brand
// @route - api/brand/:id
// @access  public

export const getSingleBrand = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  if (_id === undefined) {
    throw new Error(" please Mention Brand Name!");
  }
  const SingleBrand = await brandModel.findOne({ _id });

  if (!SingleBrand) {
    throw new Error(" Brand does't exist !");
  }
  res.json({
    status: "success",
    message: "brand Seccessfully fetched!",
    brand: SingleBrand,
  });
});

//  logic For  update brand
// @-desc-  update brand
// @route - api/brand/update/:id
// @access  private/Admin

export const updateBrand = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { name } = req.body;
  const newBrand = await brandModel.findByIdAndUpdate(
    _id,
    { name },
    { new: true }
  );

  if (!newBrand) {
    throw new Error(" Brand not Found !");
  }
  res.json({
    status: "success",
    message: "brand Seccessfully updated!",
    brand: newBrand,
  });
});

//  logic For  delete brand
// @-desc-  delete brand
// @route - api/brand/:id
// @access  private/Admin

export const deleteBrand = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const isDeleted = await brandModel.findByIdAndDelete(_id);

  if (!isDeleted) {
    throw new Error(" Brand Already Deleted or Dosn't Exist !");
  }
  res.json({
    status: "success",
    message: "brand Seccessfully deleted!",
  });
});
