// Logeo
/**
 * Registro con datos -> usuario y contraseña
 * Verifica que exista el usuario
 * Validar la contraseña de usuario encontrado VS  contraseña de body
 * Si es exitoso se hace el logeo
 */

const login = (req, res) => {
  /**
   * 1.- Verificar que el usuario exista
   *      Regresar mensaje en caso de que no exista el usuario
   * 2.- Si el usuario existe revisar que la contraseña proporcionada sea la correcta (bcrypt)
   *      Regresar mensaje en caso de contraseña incorrecta
   *
   * 3.- Si la contraseña es correcta generar un JWT (jsonwebtoken)
   *
   * 4.- Regresar el JWT como response de login
   *      res.status(200).json({token, message: 'User logged successfully'})
   */
};

module.exports = { login };
