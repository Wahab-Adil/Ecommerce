import expressOauthJWTBearer from "express-oauth2-jwt-bearer";

const expressOauthJWTBearerAuth = expressOauthJWTBearer.auth;
const jwtCheck = expressOauthJWTBearerAuth({
  audience: "http://localhost:7000",
  issuerBaseURL: "https://dev-23plp8g77qjgosw4.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
