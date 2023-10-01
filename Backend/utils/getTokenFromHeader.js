export default function getTokenFromHeader(req) {
  const token = req?.headers.authorization?.split(" ")[1];
  if (token === undefined) {
    return "token was not found.";
  }
  return token;
}
