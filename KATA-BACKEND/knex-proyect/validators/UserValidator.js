const { celebrate, Joi, errors, Segments } = require("celebrate");
const RolesEnum = require("../utils/RolesEnum");

module.exports = {
  createUser: celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      second_last_name: Joi.string().required(),
      phone_number: Joi.string(),
      age: Joi.string(),
      email: Joi.string(),
      password: Joi.string().required(),
      //id_roles: Joi.string().required(),
      id_roles: Joi.valid("Admin", "Customer", "Seller", "Invite").required(),
      is_active: Joi.boolean(),
      id_genres: Joi.number().required(),
      id_shoes: Joi.number().required(),
    }),
  }),
};

// { createUser : }
