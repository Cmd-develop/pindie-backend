const usersRouter = require('express').Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, checkIsUserExists } = require('../middlewares/users');
const { sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendAllUsers, sendMe } = require('../controllers/users');
const checkAuth = require('../middlewares/auth');

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe); 

module.exports = usersRouter;
