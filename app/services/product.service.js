const db = require("#models/index.js");
const { decodeRegistrationToken } = require("#helpers/jwt.helper.js");
const User = db.users;
const Product = db.products;

async function getProductsByUser(req, res) {
  const { headers } = req;
  const { authorization } = headers;

  const { userId, expired } = decodeRegistrationToken(authorization);

  if (expired)
    return res.status(403).send({ message: "Token expired", status: false });
  if (!userId)
    return res.status(403).send({ message: "Invalid token", status: false });

  const user = await User.findOne({
    where: {
      pk_user_id: userId,
    },
  });

  if (!user)
    return res.status(403).send({ message: "User not found", status: false });

  const products = await Product.findAll({
    where: {
      fk_user_id: user.pk_user_id,
    },
  });

  return res.send({
    message: "Success",
    data: products,
    status: true,
  });
}

module.exports = {
  getProductsByUser,
};
