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
  const productFound = await productModel
    .findById({ _id: productId })
    .populate("reviews");
  if (!productFound) {
    throw new Error("Product Not found or deos-not exist");
  }

  const hasReviewed = productFound?.reviews?.find((review) => {
    return review?.user?.toString() === req?.AuthUserId?.toString();
  });

  if (hasReviewed) {
    throw new Error("you already reviewed this product !");
  }

  const newReview = await ReviewsModel.create({
    message,
    rating,
    product: productFound?._id,
    user: req.AuthUserId,
  });
  productFound.reviews.push(newReview?._id);
  await productFound.save();

  res.json({ status: "success", newReview });
});
