import mongoose from "mongoose";
import randomGenerater from "../utils/randomGenerater";
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderItems: [{ type: Object, required: true }],
    shippingAddress: {
      type: Object,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
      dafault: randomGenerater(),
    },
    //   stripe payment
    paymentStatus: {
      type: String,
      default: "Not paid",
    },
    paymentMethod: {
      type: String,
      default: "Not Specified",
    },
    currency: {
      type: String,
      default: "Not specified",
    },
    //  For Admin
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "processing", "shipped", "delivered"],
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);
const OrderModel = mongoose.Model("Order", OrderSchema);
export default OrderModel;
