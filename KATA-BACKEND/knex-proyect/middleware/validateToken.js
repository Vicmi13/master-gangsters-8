const jwt = require("jsonwebtoken");

const privateKey = process.env.PRIVATE_KEY;

const validateJWT = (req, res, next) => {
  const headers = req.headers;

  // console.log("authorization", headers.authorization);

  if (headers.authorization) {
    //VALIDAR JWT
    const token = headers.authorization.split(" ")[1];
    // DESTRUCTURING  ARRAY const [portador, token] = headers.authorization.split(" ");
    try {
      /**
       * verify()
       * valida expiracion
       * valida token firmado correctamente
       * valida firma o palabra secreta
       */
      const jwtDecoded = jwt.verify(token, privateKey);
      console.log("jwtDecoded", jwtDecoded);
      const { rol } = jwtDecoded;
      req.rolUser = rol;
    } catch (error) {
      console.log("error token", error);
      // error.message
      return res.status(400).json({ message: "Token invalid", error });
    }
  } else {
    return res.status(403).json({ message: "Token not provided in header" });
  }

  next();
};

module.exports = validateJWT;
