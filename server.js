const Koa = require('koa');
const errorHandler = require('./middlewares/errorHandler'); // Проверьте путь
const logger = require('./middlewares/logger'); // Путь к логгеру

const app = new Koa();

// Подключение middleware логирования
app.use(logger);

// Подключение middleware обработки ошибок
app.use(errorHandler);

app.use(async (ctx, next) => {
  ctx.assert(ctx.query.error != 500, 500);
  ctx.assert(ctx.query.message, 400, 'Передайте строку в параметре message GET-запроса');
  ctx.body = ctx.query.message;
});

module.exports = { app };
