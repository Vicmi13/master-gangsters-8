const storage = require("../utils/storage");

module.exports = async (req, res, next) => {
  if (!req.file) return next();

  const url = await storage(req.file);
  console.log("url file in Middleware", url);
  req.body.profile_picture = url;
  return next();
};
