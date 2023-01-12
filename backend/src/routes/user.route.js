const { Router } = require("express");

const { login } = require("../controllers/authentication.controller");
const {
  getUserById,
  getAllUser,
  createUser,
} = require("../controllers/user.controller");
const {
//   verifyToken,
//   verifyAdmin,
  hashPassword,
} = require("../services/authentication.service");
const {
  checkPasswordConfirmation,
  validateUser,
} = require("../services/user.service.js");

const userRouter = new Router();

userRouter.post("/login", login);
// userRouter.get("/", verifyToken, verifyAdmin, getAllUser);
userRouter.get("/", getAllUser);
userRouter.post(
  "/",
  checkPasswordConfirmation,

  validateUser,

  hashPassword,
  createUser
);
userRouter.get("/:id", getUserById);

module.exports = {
  userRouter,
};
