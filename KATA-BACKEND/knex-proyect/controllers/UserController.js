const { User } = require("../models");
const hashPassword = require("../utils/hashPassword");
const ENUM_ROLES = require("../utils/RolesEnum");

const getIdAssociateToRole = (name) => {
  let roleId = 0;
  ENUM_ROLES.forEach((value, i) => {
    if (value === name) roleId = i + 1;
  });
  console.log("roleId", roleId);
  return roleId;
};

const create = async (req, res) => {
  const {
    first_name,
    last_name,
    second_last_name,
    phone_number,
    age,
    email,
    id_genres,
    id_shoes,
    id_roles,
    is_active,
    password,
  } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const roleId = getIdAssociateToRole(id_roles);

    const newUser = {
      first_name,
      last_name,
      second_last_name,
      phone_number,
      age,
      email,
      id_genres,
      id_shoes,
      id_roles: roleId,
      is_active,
      password: hashedPassword,
    };

    // const data = await User.create(newUser);

    return User.create(newUser)
      .then((data) => {
        console.log("result", data.rowCount);
        return res.status(201).json({
          message: "User created succcessfully",
          result: data.rowCount,
        });
      })
      .catch((err) => {
        console.log("error", err);
        return res
          .status(400)
          .json({ message: "Row not inserted", error: err });
      });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "User not created successfully", error });
  }
};

const findAll = async (req, res) => {
  try {
    const data = await User.findAllWithJoins(); // User.getAll()
    // VALIDAR  si es tabla vacia if(!data.length)
    console.log("data", data);
    res.json({ message: "Users recover successfully", result: data });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error recover all rows", error });
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.getById(id);
    if (result.length) {
      res.json({ message: "User recover successfully", result });
    } else {
      res
        .status(404)
        .json({ message: `User with id ${id} not found`, error: "" });
    }
  } catch (error) {
    res.json({ message: "Error recover row by id", error });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowUpdated = await User.updateById(id, req.body);
    res.json({ message: "User updated", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowDeleted = await User.deleteById(id);
    res.status(204).json({ message: "User deleted", result: rowDeleted });
  } catch (error) {
    res.json({ message: "Error in deleted row", error });
  }
};

module.exports = {
  create,
  findAll,
  findOneById,
  updateById,
  deleteById,
};
