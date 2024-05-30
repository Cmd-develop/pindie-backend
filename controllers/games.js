// Файл controllers/games.js

const sendAllGames = (req, res) => {
    // Установим заголовок ответа в формате JSON
  res.setHeader('Content-Type', 'application/json');
  // Отправим данные в виде JSON-объекта, 
  // которые подготовим в миддлваре findAllCategories
  res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end("Игра обновлена");
};

const sendGameDeleted = (req, res) => {
    // Объект игры отправляем в формате JSON 
    res.setHeader("Content-Type", "application/json");
    // Отправляем на клиент найденный и удалённый элемент из базы данных
    res.end(JSON.stringify(req.game));
};

module.exports = { sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted, sendAllGames };