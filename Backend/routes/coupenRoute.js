import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createCoupen } from "../controllers/coupenCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createCoupen);

export default brandRouter;
