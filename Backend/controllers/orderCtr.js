import expressAsyncHandler from "express-async-handler";
import orderModel from "../models/order.js";

//  logic For  create order
// @-desc-  creating order
// @route - api/order/create
// @access  Private/Admin
export const createOrder = expressAsyncHandler(async (req, res) => {
  res.json({ message: "dummy Order  creating Ctr" });
});
