import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  registerUserCtrl,
  loginUserCtrl,
  userProfileCtrl,
  updateShippingAddressCtr,
} from "../controllers/usersCtrl.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.post("/update/shipping", isLoggedIn, updateShippingAddressCtr);
userRoutes.get("/profile", isLoggedIn, userProfileCtrl);

export default userRoutes;
