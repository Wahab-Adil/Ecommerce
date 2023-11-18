import User from "../models/User.js";

const isAdmin = async (req, res, next) => {
  const Admin = await User.findById(req.AuthUserId);
  if (Admin?.isAdmin) {
    next();
  } else {
    next(new Error("Access Denied, Admin Only !"));
  }
};

export default isAdmin;
