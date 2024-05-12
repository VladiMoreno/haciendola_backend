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

async function addProduct(req, res) {
  const { headers, body } = req;
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

  const data = await Product.create({
    ...body,
    fk_user_id: user.pk_user_id,
  });

  return res.send({
    message: "Success",
    status: true,
    data,
  });
}

async function updateProduct(req, res) {
  const { body } = req;

  const productInfo = await Product.findOne({
    where: {
      pk_product_id: body.pk_product_id,
    },
  });

  if (!productInfo)
    return res
      .status(404)
      .send({ message: "Product not found", status: false });

  await productInfo.update({
    ...body,
  });

  return res.send({
    message: "Success",
    status: true,
  });
}

async function removeProduct(req, res) {
  const { params } = req;
  const { id } = params;

  const product = await Product.findOne({ where: { pk_product_id: id } });

  if (!product)
    return res
      .status(404)
      .send({ message: "Product not found", status: false });

  await product.destroy();

  return res.send({
    message: "Success",
    status: true,
  });
}

module.exports = {
  getProductsByUser,
  addProduct,
  updateProduct,
  removeProduct,
};
