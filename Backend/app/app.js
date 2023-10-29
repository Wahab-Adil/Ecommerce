// import modules
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import dbConnection from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
import productRouter from "../routes/productsRoute.js";
import categoryRouter from "../routes/categroyRoute.js";
import brandRouter from "../routes/brandRoute.js";
import colorRouter from "../routes/colorRoute.js";
import reviewRouter from "../routes/reviewRoute.js";
import orderRouter from "../routes/orderRoute.js";

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
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log(event);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

// middlewares
app.use(express.json());

// routes
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
