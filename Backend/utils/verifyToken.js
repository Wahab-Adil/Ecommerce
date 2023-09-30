import jwt from "jsonwebtoken";

export default function verifyToken(token) {
  const VerifiedToken = jwt.verify(
    token,
    process.env.JWT_KEY,
    (err, decode) => {
      if (err) {
        return false;
      }
      return decode;
    }
  );
  return VerifiedToken;
}
