const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME || "sequelize-g8";
const DB_PASS = process.env.DB_PASS || "password";
const DB_USER = process.env.DB_USER || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  dialectOptions: {
    timezone: "-05:00",
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "America/Mexico_City",
});
