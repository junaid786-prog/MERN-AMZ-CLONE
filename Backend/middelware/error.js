const ErrorHandler = require("../utils/ErrorClass");

module.exports = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message,
      status: err.status,
    },
  });
};
