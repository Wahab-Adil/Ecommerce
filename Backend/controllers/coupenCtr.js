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
    code: code.toUpperCase(),
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

//  logic For  get all coupons
// @-desc-  get all coupons
// @route - api/coupen/
// @access  Private/Admin
export const getAllCoupons = expressAsyncHandler(async (req, res) => {
  const AllCoupons = await coupenModel.find();
  res.json({
    success: true,
    message: "coupen fetched  successfylly !",
    coupens: AllCoupons,
  });
});

//  logic For  get single  coupon
// @-desc-  get single coupon
// @route - api/coupen/:id
// @access  Private/Admin
export const getSingleCoupon = expressAsyncHandler(async (req, res) => {
  const SingleCoupon = await coupenModel.findById(req.params.id);
  if (!SingleCoupon) {
    throw new Error("Coupon not Found !");
  }
  res.json({
    success: true,
    message: "coupen fetched  successfylly !",
    coupen: SingleCoupon,
  });
});

//  logic For  delete single  coupon
// @-desc-  delete single coupon
// @route - api/coupen/:id
// @access  Private/Admin
export const deleteCoupon = expressAsyncHandler(async (req, res) => {
  const deletedCoupon = await coupenModel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  if (!deletedCoupon) {
    throw new Error("Coupon Already deleted or desnt exist");
  }

  res.json({
    success: true,
    message: "coupon deleted successfylly !",
  });
});

//  logic For  update single  coupon
// @-desc-  update single coupon
// @route - api/coupen/:id
// @access  Private/Admin
export const updateCoupon = expressAsyncHandler(async (req, res) => {
  const { code, startDate, endDate, discount } = req.body;
  const updatedCoupon = await coupenModel.findByIdAndUpdate(
    req.params.id,
    {
      code,
      startDate,
      endDate,
      discount,
    },
    {
      new: true,
    }
  );
  if (!updatedCoupon) {
    throw new Error("Coupon not updated !");
  }
  res.json({
    success: true,
    message: "coupen Updated successfylly !",
    coupen: updatedCoupon,
  });
});
