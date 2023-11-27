const generateOtp = (req) => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  req.otp = otp;
  return otp;
};
export default generateOtp;
