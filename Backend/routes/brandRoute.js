import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createBrand } from "../controllers/brandCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createBrand);

export default brandRouter;
