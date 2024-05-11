const JWT = require("jsonwebtoken");
const db = require("#models/index.js");
const User = db.users;

const signToken = (id, remember) => {
  const obj = { pk_user: id };
  if (!remember) {
    obj.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 2;
  }
  return JWT.sign(obj, process.env.JWT_TOKEN);
};

async function login(req, res) {
  const { username, password, remember } = req.body;

  const userInfo = await User.findOne({
    where: {
      user_name: username,
    },
  });

  if (!userInfo) {
    throw new Error("El usuario no existe");
  }

  const isMatch = await userInfo.isValidPassword(password);

  if (!isMatch) {
    throw new Error("Credenciales incorrectas");
  }

  const token = signToken(userInfo.pk_user_id, remember);

  return res.send({
    status: true,
    message: "Success",
    data: {
      token,
    },
  });
}

module.exports = {
  login,
};
