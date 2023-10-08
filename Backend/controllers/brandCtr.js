import expressAsyncHandler from "express-async-handler";
import brandModel from "../models/brand.js";

export const createBrand = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;

  const ExistedBrand = await brandModel.findOne({ name });

  if (ExistedBrand) {
    throw new Error("Brand Already Exist !");
  }

  const brand = await brandModel.create({
    name,
    user: req.AuthUserId,
  });
  if (!brand) {
    throw new Error("Brand desn't created ");
  }
  res.json({ status: "success", message: "brand created successfylly !" });
});
