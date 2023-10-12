import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createReview } from "../controllers/reviewCtr.js";

const reviewRouter = express.Router();

reviewRouter.post("/create/:productId", isLoggedIn, createReview);

export default reviewRouter;
