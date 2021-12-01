const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_ROUNDS, (errSalt, salt) => {
      if (errSalt) reject(errSalt);

      bcrypt.hash(password, salt, (errHash, hash) => {
        // console.log("password hasheada", hash);
        if (errHash) reject(errHash);
        resolve(hash);
      });
    });
  });
}

module.exports = hashPassword;
