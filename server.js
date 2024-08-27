const Koa = require('koa')

/*
  TODO: используйте функцию require, чтобы подключить модуль, содержащий middleware
*/
const logger = require('./middlewares/logger');

const app = new Koa()
/*
  TODO: используйте функцию app.use, чтобы подключить middleware
*/
app.use(logger);

app.use(async (ctx, next) => {
  ctx.assert(ctx.query.message, 400, 'Передайте строку в параметре message GET-запроса')
  ctx.body = ctx.query.message
})
module.exports = { app }


