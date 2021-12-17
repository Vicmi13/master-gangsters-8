const multer = require("multer");

const multerInstance = multer({
  // se guarda en memoria RAM
  storage: multer.memoryStorage(),
  limits: 7 * 1024 * 1024, //7MB
});

module.exports = multerInstance;
