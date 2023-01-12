const Joi = require("joi");

const userSchemaIndividual = Joi.object({
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
  licence: Joi.string().max(100).required(),
});

const userSchemaCompany = Joi.object({
  name: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
});

const checkPasswordConfirmation = (req, res, next) => {
  const { password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    delete req.body.confirmPassword;
    next();
  } else {
    res.send("password confirmation doesnt match");
  }
};

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password, licence } = req.body;

  const { error } = userSchemaIndividual.validate(
    { firstname, lastname, email, password, licence },
    { abortEarly: false }
  );

  if (error) {
    console.error(error);
    res.status(422);
  } else {
    next();
  }
};

const validateCompany = (req, res, next) => {
  const { name, email, password } = req.body;

  const { error } = userSchemaCompany.validate(
    { name, email, password },
    { abortEarly: false }
  );

  if (error) {
    console.error(error);
    res.status(422);
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validateCompany,
  checkPasswordConfirmation,
};
