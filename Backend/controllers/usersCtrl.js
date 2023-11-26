import userModel from "../models/User.js";
import bcrypt from "bcryptjs";
import expressHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import generateOtp from "../utils/generateOtp.js";
import dotenv from "dotenv";
dotenv.config();

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
  const isMatchPassword = bcrypt.compare(password, isExistUser?.password);

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

//  logic For  change password

// @-desc-  change password
// @route - api/user/changepassword
// @access  Public
export const changepassword = expressHandler(async (req, res) => {
  const { prevPassword, newPassword } = req.body;

  const isExistUser = await userModel.findById(req.AuthUserId);

  if (!isExistUser) {
    throw new Error("User not Found !");
  }
  const isMatchPassword = await bcrypt.compare(
    prevPassword,
    isExistUser?.password
  );
  if (!isMatchPassword) {
    throw new Error("password does not matching !");
  }
  if (isExistUser && isMatchPassword) {
    // generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await userModel.findByIdAndUpdate(
      req.AuthUserId,
      {
        password: hashedPassword,
      },
      {
        new: true,
      }
    );
    res.json({
      success: true,
      message: "password Successfully changed !",
    });
  }
});

// --------------------------------------------------------

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

//  logic For  sending  Email

// @-desc-  send  email
// @route - api/user/sendemail
// @access  Public
export const sendEmail = expressHandler(async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: "Afghan-Ecommerce",
    text: `your otp code is = ${otp}`,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email send successfully !");
    }
  });
  res.json({
    success: true,
    message: "email Successfully send !",
  });
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
