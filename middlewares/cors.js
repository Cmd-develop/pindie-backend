const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000'
];

function cors(req, res, next) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    next(); 
}

module.exports = cors;