import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createCategory,
  getAllCategories,
} from "../controllers/categroyCtr.js";

const categoryRouter = express.Router();

categoryRouter.post("/create", isLoggedIn, createCategory);
categoryRouter.post("/", isLoggedIn, getAllCategories);

export default categoryRouter;
