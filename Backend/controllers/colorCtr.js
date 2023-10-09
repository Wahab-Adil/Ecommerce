import expressAsyncHandler from "express-async-handler";
import colorModel from "../models/color.js";

//  logic For  create new Color
// @-desc-  creating Color
// @route - api/color/create
// @access  Private/Admin
export const createColor = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;

  const ExistedColor = await colorModel.findOne({ name });

  if (ExistedColor) {
    throw new Error("Color Already Exist !");
  }

  const createdColor = await colorModel.create({
    name: name.toLowerCase(),
    user: req.AuthUserId,
  });
  if (!createdColor) {
    throw new Error("Color desn't created ");
  }
  res.json({ status: "success", message: "Color created successfylly !" });
});

//  logic For  fetch all colors
// @-desc-  fetch colors
// @route - api/color/
// @access  public

export const getAllColors = expressAsyncHandler(async (req, res) => {
  const AllColors = await colorModel.find({});

  if (!AllColors) {
    throw new Error("No Exisiting Colors !");
  }
  res.json({ status: "success", colors: AllColors });
});

//  logic For  fetch single Color
// @-desc-  fetch color
// @route - api/color/:id
// @access  public

export const getSingleColor = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  if (_id === undefined) {
    throw new Error(" please Mention Color Name!");
  }
  const SingleColor = await brandModel.findOne({ _id });

  if (!SingleColor) {
    throw new Error(" Color does't exist !");
  }
  res.json({
    status: "success",
    message: "color Seccessfully fetched!",
    color: SingleColor,
  });
});

//  logic For  update color
// @-desc-  update color
// @route - api/brand/color/:id
// @access  private/Admin

export const updateColor = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { name } = req.body;
  const exisitedColor = await colorModel.findByIdAndUpdate(
    _id,
    { name },
    { new: true }
  );

  if (!exisitedColor) {
    throw new Error(" Brand not Found !");
  }
  res.json({
    status: "success",
    message: "brand Seccessfully updated!",
    exisitedColor,
  });
});
