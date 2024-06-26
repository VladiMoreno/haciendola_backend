const AuthService = require("#services/auth.service.js");
const { handleSequelizeError } = require("#utils/errorHandler.util.js");

exports.login = async (req, res) => {
  try {
    await AuthService.login(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    if (statusCode !== 404) {
      return res.status(statusCode).send({
        status: false,
        message: message,
        error: error.message,
      });
    }
    return res.status(statusCode).send({
      status: false,
      message: message,
    });
  }
};

exports.validarPIN = async (req, res) => {
  try {
    await AuthService.validarPIN(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    if (statusCode !== 404) {
      return res.status(statusCode).send({
        status: false,
        message: message,
        error: error.message,
      });
    }
    return res.status(statusCode).send({
      status: false,
      message: message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    await AuthService.changePassword(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    if (statusCode !== 404) {
      return res.status(statusCode).send({
        status: false,
        message: message,
        error: error.message,
      });
    }
    return res.status(statusCode).send({
      status: false,
      message: message,
    });
  }
};
