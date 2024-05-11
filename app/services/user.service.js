const db = require("#models/index.js");
const bcrypt = require("bcrypt");
const User = db.users;

async function createUser(req, res) {
  const { username, password, pin } = req.body;

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));

  const hashedPin = bcrypt.hashSync(pin, bcrypt.genSaltSync(8));

  const data = await User.create({
    user_name: username,
    user_password: hashedPassword,
    user_pin: hashedPin,
    fk_user_state: 4,
  });

  return res.send({
    status: true,
    message: "Success",
    data,
  });
}

module.exports = {
  createUser,
};
