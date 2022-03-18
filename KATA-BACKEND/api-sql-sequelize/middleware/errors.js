/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */

exports.handleError = (err, res) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({ message: err });
  }
  if (err.code === 409) {
    // jwt authentication error
    return res.status(err.code).json({ message: err.message });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }

  return res.status(500).json({ message: err.message });
};
