module.exports = async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // Логирование ошибки
      console.log(new Date(), 'Error:', err.message);
      
      // Обработка ошибок по статусу
      if (ctx.status >= 500) {
        ctx.body = "Наши специалисты уже работают над устранением ошибки";
      } else if (ctx.status >= 400 && ctx.status < 500) {
        ctx.body = "Ошибка формирования запроса";
      }
    }
  };
  