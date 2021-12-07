const validateRole = (role) => {
  return (req, res, next) => {
    console.log("USER in request middleware", req.rolUser); // Admin
    console.log("USER LANGUAGE in request middleware", req.languageUser);
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
