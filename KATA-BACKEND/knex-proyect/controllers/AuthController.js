const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const privateKey = process.env.PRIVATE_KEY;
const GCLIENT_ID =
  "333130553471-bb13ta8f3159dcda4mkc7igsj0aerla6.apps.googleusercontent.com";
const googleClient = new OAuth2Client(GCLIENT_ID);

// Logeo
/**
 * Registro con datos -> usuario y contraseña
 * Verifica que exista el usuario
 * Validar la contraseña de usuario encontrado VS  contraseña de body
 * Si es exitoso se hace el logeo
 */

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1.- Verificar que el usuario exista
    const userFound = await User.getByEmail(email);
    const passwordFromDb = userFound[0].password;
    // PENDIENTE  Regresar mensaje en caso de que no exista el usuario
    // console.log("userFound", userFound);

    // 2.- Si el usuario existe revisar que la contraseña proporcionada sea la correcta (bcrypt)
    const isPasswordEqual = await bcrypt.compare(password, passwordFromDb);
    // PENDIENTE Regresar mensaje en caso de contraseña incorrecta

    if (isPasswordEqual) {
      // 3.- Si la contraseña es correcta generar un JWT (jsonwebtoken)
      const { id, first_name, last_name, second_last_name, email } =
        userFound[0];

      // jwt.sign(payload, secretOrPrivateKey, [options, callback])
      const token = jwt.sign(
        {
          email,
          completeName: `${first_name} ${last_name} ${second_last_name}`,
          id,
          rol: "Admin",
          // exp: 120900121 EPOCH
        },
        privateKey,
        {
          expiresIn: process.env.EXP_TIME,
        }
      );

      console.log("token GENERADO 😎", token);
      res.status(200).json({ token, message: "User logged successfully" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Error recover user", error });
  }

  /**
   *
   * 3.- Si la contraseña es correcta generar un JWT (jsonwebtoken)
   *
   * 4.- Regresar el JWT como response de login
   *      res.status(200).json({token, message: 'User logged successfully'})
   */
};

const authGoogle = async (req, res) => {
  const { tokenId } = req.body;

  try {
    const { payload } = await googleClient.verifyIdToken({
      idToken: tokenId,
      audience: GCLIENT_ID,
    });

    const { email } = payload;
    // 1.- Verificar que el usuario exista
    const userFound = await User.getByEmail(email);
    console.log("userFound", userFound);
    /**
     * CREATE ==== SIGN IN  => CREAR USUARIO
     * o UPDATE === LOGIN => EXISTE USUARIO
     *
     * UPSERT (SQL NATIVO, KNEX, SEQUELIZE o MOMNGOOSE)
     */

    if (!userFound.length) {
      res.json({ message: "User not found in our system" });
    } else {
      // GENERATE TOKEN
      res.json({ message: "User FOUND in our system" });
    }
  } catch (error) {
    console.log("Error login with google ", error);
  }
};

module.exports = { login, authGoogle };
