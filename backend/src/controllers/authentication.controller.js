const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
require("dotenv").config();
const { getUserByEmail } = require("../models/user.model");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    const verify = await argon2.verify(user.hashed_password, password);
    if (verify) {
      const token = jwt.sign(
        {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      delete user.hashedPassword;
      res.json({ token, user });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(403);
  }
};

module.exports = {
  login,
};
