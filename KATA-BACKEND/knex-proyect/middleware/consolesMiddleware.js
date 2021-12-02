const printTime = (req, res, next) => {
  const time = Date.now();
  //  console.log("Headers", req.headers);

  console.log(`Pintando hora a las ${time}`);
  // return res.status(205).json({ message: "Middleware" });
  next();
};

const printtName = (req, res, next) => {
  console.log(`headers`, req.headers);
  console.log(`Segundo middleware`);

  next();
};

module.exports = { printTime, printtName };
