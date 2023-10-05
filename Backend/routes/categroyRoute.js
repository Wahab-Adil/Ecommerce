import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
} from "../controllers/categroyCtr.js";

const categoryRouter = express.Router();

categoryRouter.post("/create", isLoggedIn, createCategory);
categoryRouter.post("/update/:id", updateCategory);
categoryRouter.get("/", isLoggedIn, getAllCategories);
categoryRouter.get("/:id", isLoggedIn, getSingleCategory);

export default categoryRouter;
