import expressAsyncHandler from "express-async-handler";
import dotenv from "dotenv";
import orderModel from "../models/order.js";
import User from "../models/User.js";
import Stripe from "stripe";
import productModel from "../models/product.js";

// dotenv
dotenv.config();
// instance of stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
  // checking if user has shipping Address or not
  if (!FoundUser?.hasShappingAddress) {
    throw new Error("Please provide shipping Address");
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

  const convertedOrder = orderItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Product Name",
          description: "About Product",
        },
        unit_amount: 10 * 100,
      },
      quantity: 12,
    };
  });
  // make payment
  const session = await stripe.checkout.sessions.create({
    line_items: convertedOrder,
    metadata: {
      orderId: JSON.stringify(order?._id),
    },
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.send({ url: session.url });
  console.log();
  // res.json({
  //   success: true,
  //   message: "Order Created !",
  //   order,
  //   user: FoundUser,
  // });
});

export const fetchAllOrders = expressAsyncHandler(async (req, res) => {
  const findAllOrders = await orderModel.find();
  if (findAllOrders.length <= 0) {
    res.json({
      success: false,
      message: "No orders Found",
      orders: findAllOrders,
    });
  }

  res.json({
    success: true,
    message: "All Orders All fetched",
    order: findAllOrders,
  });
});
