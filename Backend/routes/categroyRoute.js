import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categroyCtr.js";
import categoryFileUpload from "../config/categoryFileUpload.js";
const categoryRouter = express.Router();

categoryRouter.post(
  "/create",
  isLoggedIn,
  categoryFileUpload.single("file"),
  createCategory
);
categoryRouter.post("/update/:id", updateCategory);
categoryRouter.get("/", isLoggedIn, getAllCategories);
categoryRouter.get("/:id", isLoggedIn, getSingleCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
