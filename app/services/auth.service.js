const JWT = require("jsonwebtoken");
const db = require("#models/index.js");
const User = db.users;

const signToken = (id, remember) => {
  const obj = { sub: id };
  if (!remember) {
    obj.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 2;
  }
  return JWT.sign(obj, process.env.JWT_SECRET);
};

async function login(req, res) {
  try {
    const { username, password, remember } = req.body;

    const userInfo = await User.findOne({
      where: {
        user_name: username,
      },
    });

    if (!userInfo) {
      throw new Error();
    }

    const isMatch = await userInfo.isValidPassword(password);

    if (!isMatch) {
      throw new Error();
    }

    const token = signToken(userInfo.pk_user_id, remember);

    res.send({ userInfo, token });
  } catch (error) {
    res.status(401).send({ success: false, error });
  }
}

module.exports = {
  login,
};
