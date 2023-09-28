import userModel from "../models/User.js";
import bcrypt from "bcryptjs";

// logic for user Registeration

// @-desc- Register User
// @route - api/users/register
// @access  Private/Admin
export const registerUserCtrl = async (req, res) => {
  const { fullname, email, password } = req.body;
  const existUser = await userModel.findOne({ email });
  if (existUser) {
    // throw
    res.json({
      msg: "user Already Exist !",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const createdUser = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });
  if (createdUser) {
    res.json({
      msg: "user Created Successfully",
      user: createdUser,
    });
  }
};
