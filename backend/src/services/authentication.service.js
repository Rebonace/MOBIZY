const argon2 = require("argon2");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    req.body.hashedPassword = await argon2.hash(
      req.body.password,
      hashingOptions
    );
    delete req.body.password;
    next();
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports = {
  hashPassword,
};
