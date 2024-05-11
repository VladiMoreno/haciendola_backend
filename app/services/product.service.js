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
  const {
    handle,
    title,
    description,
    sku,
    grams,
    stock,
    price,
    compare_price,
    bar_code,
  } = body;

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

  await Product.create({
    product_handle: handle,
    product_title: title,
    product_description: description,
    product_sku: sku,
    product_grams: grams,
    product_stock: stock,
    product_price: price,
    product_compare_price: compare_price,
    product_bar_code: bar_code,
    fk_user_id: user.pk_user_id,
  });

  return res.send({
    message: "Success",
    status: true,
  });
}

async function editProduct(req, res) {
  const { body } = req;
  const {
    id,
    handle,
    title,
    description,
    sku,
    grams,
    stock,
    price,
    compare_price,
    bar_code,
  } = body;

  await Product.findOneAndUpdate(
    { pk_product_id: id },
    {
      product_handle: handle,
      product_title: title,
      product_description: description,
      product_sku: sku,
      product_grams: grams,
      product_stock: stock,
      product_price: price,
      product_compare_price: compare_price,
      product_bar_code: bar_code,
    },
    { new: true }
  );

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
  editProduct,
  removeProduct,
};
