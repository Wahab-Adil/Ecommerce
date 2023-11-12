import expressAsyncHandler from "express-async-handler";
import coupenModel from "../models/coupen.js";

//  logic For  create coupen
// @-desc-  creating coupen
// @route - api/coupen/create
// @access  Private/Admin
export const createCoupen = expressAsyncHandler(async (req, res) => {
  const { code, startDate, endDate, discount } = req.body;

  const ExistedCoupen = await coupenModel.findOne({ code });

  if (ExistedCoupen) {
    throw new Error("coupen Already Exist !");
  }
  if (isNaN(discount)) {
    throw new Error("Discount Value must be a number");
  }

  const createdCoupen = await coupenModel.create({
    code,
    startDate,
    endDate,
    discount,
    user: req.AuthUserId,
  });
  res.status(201).json({
    status: "success",
    message: "coupen created successfylly !",
    coupen: createdCoupen,
  });
});