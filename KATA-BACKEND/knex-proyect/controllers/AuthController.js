const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const privateKey = "secr3tk3yG81/12!@";

// Logeo
/**
 * Registro con datos -> usuario y contraseña
 * Verifica que exista el usuario
 * Validar la contraseña de usuario encontrado VS  contraseña de body
 * Si es exitoso se hace el logeo
 */

const login = async (req, res) => {
  const { email, password } = req.body; // 12121212121

  try {
    // 1.- Verificar que el usuario exista
    const userFound = await User.getByEmail(email);
    const passwordFromDb = userFound[0].password;
    // PENDIENTE  Regresar mensaje en caso de que no exista el usuario
    console.log("userFound", userFound);

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
        },
        privateKey,
        {
          expiresIn: "20m",
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

module.exports = { login };
