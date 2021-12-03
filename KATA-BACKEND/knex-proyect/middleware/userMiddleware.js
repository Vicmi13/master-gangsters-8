const validateRole = (role) => {
  console.log("role", role);
  console.log("req.headers.authorization");
  console.log("role", role);

  return (req, res, next) => {
    console.log("res MIDDLEWARE", res);
    console.log("req USER", req.rolUser); // Admin
    if (req.rolUser !== role) {
      return res
        .status(403)
        .json({ message: "Access denied", error: "Error invalid rol" });
    }

    next();
  };
};

module.exports = {
  validateRole,
};
