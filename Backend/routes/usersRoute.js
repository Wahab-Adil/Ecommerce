import express from "express";
import isLoggedIn from "../middlewares/isloggedIn.js";
import {
  registerUserCtrl,
  loginUserCtrl,
  userProfileCtrl,
  updateShippingAddressCtr,
  changepassword,
  sendOtpToEmail,
  resendOtpToEmail,
} from "../controllers/usersCtrl.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.post("/changepassword", isLoggedIn, changepassword);
userRoutes.post("/sendemail", sendOtpToEmail);
userRoutes.post("/resendotp", resendOtpToEmail);
userRoutes.post("/update/shipping", isLoggedIn, updateShippingAddressCtr);
userRoutes.get("/profile", isLoggedIn, userProfileCtrl);

export default userRoutes;
