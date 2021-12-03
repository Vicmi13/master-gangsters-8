const { celebrate, Joi, errors, Segments } = require("celebrate");
const enumRoles = require("../utils/RolesEnum");

const createUser = () => {
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      second_last_name: Joi.string().required(),
      phone_number: Joi.string(),
      age: Joi.string(),
      email: Joi.string(),
      password: Joi.string().required(),
      role: Joi.string().required(),
      //DUDA
      role: Joi.string().valid(enumRoles),
      is_active: Joi.boolean(),
      id_genre: Joi.number().required(),
      id_shoes: Joi.number().required(),
    }),
  });
};

module.exports = {
  createUser,
};
