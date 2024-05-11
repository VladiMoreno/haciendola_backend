const UserService = require("#services/user.service.js");

exports.createUser = async (req, res) => {
  try {
    await UserService.createUser(req, res);
  } catch (error) {
    return res.status(500).json({ status: false, message: "Error " + error });
  }
};
