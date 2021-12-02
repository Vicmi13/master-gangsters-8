const jwt = require("jsonwebtoken");
const privateKey = "secr3tk3yG81/12!@";

const validateJWT = (req, res, next) => {
  const headers = req.headers;

  console.log(headers.authorization);

  if (headers.authorization) {
    //VALIDAR JWT
    const token = headers.authorization.split(" ")[1];
    // DESTRUCTURING  ARRAY const [portador, token] = headers.authorization.split(" ");
    try {
      const jwtDecoded = jwt.verify(token, "123");
      console.log("jwtDecoded", jwtDecoded);
    } catch (error) {
      console.log("error token", error);
    }
  } else {
    return res.status(403).json({ message: "Token not provided in header" });
  }

  // next();
};

module.exports = validateJWT;
