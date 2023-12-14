// import modules
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import openIdConnect from "express-openid-connect";
const auth = openIdConnect.auth;

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
import coupenRouter from "../routes/coupenRoute.js";

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

console.log(process.env.AUTH0_BASEURL);
// AUTH0 config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASEURL,
  clientID: process.env.AUTHO_CLIENTID,
  issuerBaseURL: process.env.AUTH0_ISSUERBASEURL,
};

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
      console.log("type of Event", event.type);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    if (event.type === "checkout.session.completed") {
      // getting from stripe the Status
      const session = event.data.object;
      const { orderId } = session.metadata;
      const paymentStatus = session.payment_status;
      const paymentMethod = session.payment_method_types[0];
      const totalAmount = session.amount_total;
      const currency = session.currency;
      // find Order and Updating With Stripe Details that give with 200 status
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
      if (!Order) {
        res.json({ message: "Order desn't exist !" });
        return;
      }
      response.send({ status: "Success", order: Order });
    } else {
      return;
    }
  }
);

// middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(auth(config));

// endpoints
app.use("/api/user/", userRoutes);
app.use("/api/product/", productRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/brand/", brandRouter);
app.use("/api/color/", colorRouter);
app.use("/api/review/", reviewRouter);
app.use("/api/order/", orderRouter);
app.use("/api/coupen/", coupenRouter);

// catching Errors
app.use(notFoundErrHandler);
app.use(globalErrorHandler);

// calling DB Connection Function
dbConnection();

export default app;
