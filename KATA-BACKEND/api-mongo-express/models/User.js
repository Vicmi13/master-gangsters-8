const mongoose = require("mongoose");
const { Schema } = mongoose;
// PENDIENTE CONEXION

// Se definen aqui los campos de nuesra tabla (Collection)
const UserSchema = new Schema({
  name: String, // short hand
  lastName: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  age: {
    type: Number,
    min: [18, "You're need to be older"],
    max: 99,
  },
  role: {
    type: String,
    default: "USER",
    enum: ["ADMIN", "USER", "SELLER"],
  },
});

const User = mongoose.model("User", UserSchema); // users

module.exports = User;

/**
 * Bajo nivel: Driver => MONGO
 *
 * Medio nivel: Query Builder KNEX SQL
 *
 * Alto nivel:
 *          ORM (Sequelize) SQL
 *          ODM Object document mapping (Mongoose) No SQL
 */
