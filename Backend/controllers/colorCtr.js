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
