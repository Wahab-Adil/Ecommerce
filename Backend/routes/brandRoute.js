import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createBrand, getAllBrands } from "../controllers/brandCtr.js";

const brandRouter = express.Router();

brandRouter.post("/create", isLoggedIn, createBrand);
brandRouter.get("/", getAllBrands);

export default brandRouter;
