const validateRole = (role) => {
  return (req, res, next) => {
    console.log("USER in request middleware", req.rolUser); // Admin
    if (req.rolUser !== role) {
      return res
        .status(403)
        .json({ message: "Access denied", error: "Rol Invalid" });
    }

    next();
  };
};

module.exports = {
  validateRole,
};
