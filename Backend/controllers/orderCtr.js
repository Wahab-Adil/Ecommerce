import expressAsyncHandler from "express-async-handler";
import orderModel from "../models/order.js";
import User from "../models/User.js";
import productModel from "../models/product.js";

//  logic For  create order
// @-desc-  creating order
// @route - api/order/create
// @access  Private/Admin
export const createOrder = expressAsyncHandler(async (req, res) => {
  // getting data from req body
  const { orderItems, shippingAddress, totalPrice } = req.body;
  // finding user
  const FoundUser = await User.findOne({ _id: req.AuthUserId });
  // if user desn't exist
  if (!FoundUser) {
    throw new Error("User not Found !");
  }
  // check if order is  Empty
  if (orderItems?.length <= 0) {
    throw new Error("No Order items");
  }
  // create or place order -save it on DB
  const order = await orderModel.create({
    user: FoundUser?._id,
    orderItems,
    shippingAddress,
    totalPrice,
  });

  // updating product quantity
  const AllProducts = await productModel.find({
    _id: { $in: orderItems },
  });
  console.log(AllProducts);
  orderItems?.find(async (order) => {
    const matchedProduct = AllProducts?.find((product) => {
      return product?._id.toString() === order?._id.toString();
    });
    if (matchedProduct) {
      matchedProduct.totalSold += order.totalQtyBuying;
    }
    await matchedProduct.save();
  });

  // Belong order to Existing User
  FoundUser.orders.push(order);
  await FoundUser.save();

  // make payment

  res.json({
    success: true,
    message: "Order Created !",
    order,
    user: FoundUser,
  });
});
