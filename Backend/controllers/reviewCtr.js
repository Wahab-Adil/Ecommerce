import expressAsyncHandler from "express-async-handler";
import ReviewsModel from "../models/review.js";
import productModel from "../models/product.js";
//  logic For  create review
// @-desc-  creating review
// @route - api/review/create
// @access  Private/Admin
export const createReview = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { message, rating } = req.body;
  const productFound = await productModel.findOne({ _id: productId });
  if (!productFound) {
    throw new Error("Product Not found or deos-not exist");
  }

  const newReview = await ReviewsModel.create({
    message,
    rating,
    product: productFound?._id,
    user: req.AuthUserId,
  });
  productFound.reviews.push(newReview?._id);
  await productFound.save();

  const productWithReviewed = productFound.reviews.push();
  res.json({ status: "success", newReview });
});
