export const globalErrorHandler = (err, req, res, next) => {
  const stack = err?.stack;
  const status = err?.statusCode ? err.statusCode : 500;
  const message = err?.message;
  res.status(status).json({ stack, message });
};

// Route not found Error  handler
export const notFoundErrHandler = (req, res, next) => {
  const notFoundErr = new Error(`Route ${req.originalUrl} not found`);
  next(notFoundErr);
};
