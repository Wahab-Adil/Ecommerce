import otpGenerator from "otp-generator";

const generateOtp = () => {
  const otp = otpGenerator.generate(5, {
    upperCaseAlphabets: true,
    specialChars: false,
  });
  return otp;
};
export default generateOtp;
