import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      default: "https://picsum.photos/200/300",
      required: true,
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
