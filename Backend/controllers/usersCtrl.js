import userModel from "../models/User.js";
import bcrypt from "bcryptjs";
import expressHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

// logic for user Registeration

// @-desc- Register User
// @route - api/user/register
// @access  Private/Admin
export const registerUserCtrl = expressHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
  const existUser = await userModel.findOne({ email });
  if (existUser) {
    // throw
    throw new Error("User Already Exist");
  }
  // generate salt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create new User with hashed password
  const createdUser = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });

  console.log("created User", createdUser);
  if (createdUser) {
    res.json({
      msg: "user Created Successfully",
      user: createdUser,
    });
  }
});

// ---------------------------------------------------

//  logic For Login User

// @-desc- login User
// @route - api/user/login
// @access  Public
export const loginUserCtrl = expressHandler(async (req, res) => {
  const { email, password } = req.body;

  const isExistUser = await userModel.findOne({ email });
  const isMatchPassword = await bcrypt.compare(password, isExistUser?.password);

  if (isExistUser && isMatchPassword) {
    res.status(302).json({
      status: "success",
      msg: "User Found .",
      user: isExistUser,
      token: generateToken(isExistUser?._id),
    });
  }
  throw new Error("Invalid login Credientials");
});

// --------------------------------------------------------

//  logic For shipping Address

// @-desc-  User shipping Address
// @route - api/user/update/shipping
// @access  Private

export const updateShippingAddressCtr = expressHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    city,
    postalCode,
    province,
    country,
    phone,
  } = req.body;
  console.log(req.AuthUserId);
  const UpdatedUser = await userModel.findByIdAndUpdate(
    { _id: req.AuthUserId },
    {
      shippingAddress: {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        province,
        country,
        phone,
      },
      hasShappingAddress: true,
    },
    { new: true }
  );
  if (!UpdatedUser) {
    throw new Error("User was not found");
  }
  res.json({
    success: true,
    message: "User Shipping Address Updated Successfully !",
    user: UpdatedUser,
  });
});

// --------------------------------------------------------

//  logic For  User profile

// @-desc-  User profile
// @route - api/user/profile
// @access  Public
export const userProfileCtrl = expressHandler(async (req, res) => {
  const AllOrders = await userModel.findById(req.AuthUserId).populate("orders");
  res.json({
    success: true,
    message: "Orders Successfully Fetched !",
    orders: AllOrders,
  });
});
