import getTokenFromHeader from "../utils/getTokenFromHeader.js";
import verifyToken from "../utils/verifyToken.js";

export default function isLoggedIn(req, res, next) {
  // taking token from header
  const token = getTokenFromHeader(req);
  // verify Token
  const verifiedToken = verifyToken(token);
  // inject  decoded user to request
  if (!verifiedToken) {
    throw new Error("Invalid/Expired token, please login again");
  } else {
    req.AuthUserId = verifiedToken?.id;
    next();
  }
}
