// import modules
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

// connection
import dbConnection from "../config/dbConnect.js";

// Routes
import userRoutes from "../routes/usersRoute.js";
import productRouter from "../routes/productsRoute.js";
import categoryRouter from "../routes/categroyRoute.js";
import brandRouter from "../routes/brandRoute.js";
import colorRouter from "../routes/colorRoute.js";
import reviewRouter from "../routes/reviewRoute.js";
import orderRouter from "../routes/orderRoute.js";

// Models
import OrderModel from "../models/order.js";

// Error - middalewares
import {
  globalErrorHandler,
  notFoundErrHandler,
} from "../middlewares/globalErrorHandler.js";

// calling express
const app = express();

// env config
dotenv.config();

// instance of Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log(event);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { orderId } = session.metadata;
      const paymentStatus = session.payment_status;
      const paymentMethod = session.payment_method_types[0];
      const totalAmount = session.amount_total;
      const currency = session.currency;
      // find Order
      const Order = await OrderModel.findByIdAndUpdate(
        JSON.parse(orderId),
        {
          totalPrice: totalAmount / 100,
          currency,
          paymentMethod,
          paymentStatus,
        },
        { new: true }
      );
    } else {
      return;
    }
    if (!Order) {
      res.json({ message: "Order desn't exist !" });
      return;
    }
    response.send({ status: "Success", order: Order });
  }
);

// middlewares
app.use(express.json());

// endpoints
app.use("/api/user/", userRoutes);
app.use("/api/product/", productRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/brand/", brandRouter);
app.use("/api/color/", colorRouter);
app.use("/api/review/", reviewRouter);
app.use("/api/order/", orderRouter);

// catching Errors
app.use(notFoundErrHandler);
app.use(globalErrorHandler);

// calling DB Connection Function
dbConnection();

export default app;
