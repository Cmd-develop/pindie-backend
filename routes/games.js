const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games');
const { sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted, sendAllGames } = require('../controllers/games');
const {checkAuth, checkCookiesJWT} = require('../middlewares/auth');

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, updateGame, sendGameUpdated, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth);
gamesRouter.delete("/games/:id", findGameById, deleteGame, sendGameDeleted, checkAuth);

module.exports = gamesRouter;