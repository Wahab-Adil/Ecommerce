import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      ref: "Categroy",
      required: true,
    },
    sizes: {
      type: [String],
      enum: ["S", "M", "L", "XL", "XXL"],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    images: [{ type: String, default: "https://via.placeholder.com/150" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    price: { type: Number, required: true },
    totalQty: { type: Number, required: true },
    totalSold: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// getting total reviews in single product
productSchema.virtual("totalReviews").get(function () {
  const product = this;
  return product?.reviews?.length;
});
productSchema.virtual("averageRating").get(function () {
  const product = this;
  let totalRating = 0;
  product?.reviews?.forEach((review) => {
    totalRating += review?.rating;
  });
  let avgRating = totalRating / product?.reviews?.length;
  if (!avgRating) {
    avgRating = 0;
  }
  return avgRating;
});

const productModel = mongoose.model("product", productSchema);
export default productModel;
