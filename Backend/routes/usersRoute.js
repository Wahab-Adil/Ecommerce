import express from "express";
import { registerUserCtrl, loginUserCtrl } from "../controllers/usersCtrl.js";
const userRoutes = express.Router();

userRoutes.post("/users/register", registerUserCtrl);

export default userRoutes;
