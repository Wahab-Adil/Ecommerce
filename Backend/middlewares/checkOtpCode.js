import store from "store";

const checkOtp = async (req, res, next) => {
  if (!store.get("otp")) {
    next(new Error("Please first send otp to email then check Otp!"));
  }
  const otp = store.get("otp");
  const userProvidedOtp = store.get("userProvidedOtp");
  if (otp === userProvidedOtp) {
    next();
  } else {
    next(new Error("Please Provide correct Otp!"));
  }
};

export default checkOtp;
