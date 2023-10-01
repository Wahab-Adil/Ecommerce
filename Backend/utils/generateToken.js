import jwt from "jsonwebtoken";

export default function generateToken(payload) {
  return jwt.sign({ payload }, process.env.JWT_KEY, { expiresIn: "3d" });
}
