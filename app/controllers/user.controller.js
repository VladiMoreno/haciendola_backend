const UserService = require("#services/user.service.js");
const { handleSequelizeError } = require("#utils/errorHandler.util.js");

exports.createUser = async (req, res) => {
  try {
    await UserService.createUser(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    return res.status(statusCode).send({
      status: false,
      message: message,
      error: error.message,
    });
  }
};
