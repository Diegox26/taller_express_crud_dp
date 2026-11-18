export const requestLogger = (req, res, next) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  // Escucha cuando termina la respuesta para registrar también el código HTTP y duración
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `[${timestamp}] ${req.method} ${req.originalUrl} -> Status: ${res.statusCode} (${duration}ms)`
    );
  });

  next();
};