import mongoose from "mongoose";

const Shema = mongoose.Schema;

const brandSchema = new Shema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
  ],
});

const productModel = mongoose.model("Brand", brandSchema);
export default productModel;
