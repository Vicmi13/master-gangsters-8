const { Sequelize } = require("sequelize/dist");
const { handleError } = require("../middleware/errors");
const User = require("../models/User");
const Skills = require("../models/User");

exports.create = async (req, res) => {
  try {
    const { name, telephone, email, password } = req.body;
    await emailExists(email);
    const hash = await bcrypt.hash(password, GEN_SALT);

    User.create({
      name,
      telephone,
      email,
      password: hash,
      noHashedPassw: password,
    })
      .then((userCreated) => {
        if (userCreated && userCreated.dataValues) {
          return res.status(201).json(userCreated.dataValues);
        }
      })
      .catch((err) => {
        return res.status(422).json({ message: err.message });
      });
  } catch (err) {
    handleError(err, res);
  }
};

exports.findUsers = async (req, res) => {
  
  try {
    const result = await User.findAll({
      include: [
        {
          model: Skills,
        },
        {
          model: Matches,
          attributes: ['journey', 'front-fee']
        },
      ],
    });
  } catch(error) {
    console.log(error);
  }
};


exports.findById = async (req,res) => {
  const id = req.params.id
  const email = 'pablito™gmail.com'
  try {
    const stm = 'SELECT * FROM users as u WHERE u.idusers = ? AND u.email = ?'
    result = await sequelize.query(stm, {
      type: QuerySelect.types,
      replacements: [id, email]
    })

    return res.json ({
      message: 'ok',
      response: result
    })

  } catch (error) {
    console.log(error);
  }
} 


