/**
 * Logs given arguments to the standard output
 * 
 * @returns {undefined}
 */
function log() {
  return console.log(new Date(), ...arguments);
}

module.exports = async function logger(ctx, next) {
  const start = Date.now();

  // Logging the incoming request method and URL
  log({
    method: ctx.method,
    url: ctx.url
  });

  try {
    // Pass control to the next middleware
    await next();
  } catch (err) {
    // Log any error that occurs
    log({
      method: ctx.method,
      url: ctx.url,
      error: err.message
    });
    throw err; // Re-throw the error after logging it
  } finally {
    const duration = Date.now() - start;

    // Logging the method, URL, and duration after processing the request
    log({
      method: ctx.method,
      url: ctx.url,
      duration: `${duration}ms`
    });
  }
};
