import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a User"],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: [true, "Review must belong to a product"],
    },
    message: {
      type: String,
      required: [true, "Please Add a Message"],
    },
    rating: {
      type: Number,
      required: [true, "please Add Rating from 1-5"],
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const ReviewsModel = mongoose.model("Review", ReviewSchema);

export default ReviewsModel;
