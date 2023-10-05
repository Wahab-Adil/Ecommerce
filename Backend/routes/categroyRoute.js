import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import { createCategory } from "../controllers/categroyCtr.js";

const categoryRouter = express.Router();

categoryRouter.post("/create", isLoggedIn, createCategory);

export default categoryRouter;
