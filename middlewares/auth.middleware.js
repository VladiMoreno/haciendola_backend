const jwt = require("jsonwebtoken");
const jwtConfig = require("#config/auth.config.js");
const db = require("#models/index.js");
const User = db.users;

const authMiddleWare = async (req, res, next) => {
  try {
    if (req.query.token) {
      return next();
    }
    const authorization = await req.header("Authorization");
    const token = authorization && authorization.split(" ")[1];

    if (!authorization) {
      return res.status(401).send({
        message: "Not authorized to do this action",
      });
    }

    jwt.verify(token, jwtConfig.secret, async (err, user) => {
      if (err)
        return res.status(403).send({ message: err.message, status: false });

      const authUser = await User.findOne({
        where: { pk_user_id: user.pk_user },
      });

      if (!authUser)
        return res
          .status(404)
          .send({ message: "User Not found!", status: false });

      req.user = authUser;

      next();
    });
  } catch (error) {
    return res.status(500).json({ message: `${JSON.stringify(error)}` });
  }
};
module.exports = authMiddleWare;
