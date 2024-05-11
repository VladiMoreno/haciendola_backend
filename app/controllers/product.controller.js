const ProductService = require("#services/product.service.js");
const { handleSequelizeError } = require("#utils/errorHandler.util.js");

exports.getProductsByUser = async (req, res) => {
  try {
    await ProductService.getProductsByUser(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    return res.status(statusCode).send({
      status: false,
      message: message,
      error: error.message,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    await ProductService.addProduct(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    return res.status(statusCode).send({
      status: false,
      message: message,
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await ProductService.updateProduct(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    return res.status(statusCode).send({
      status: false,
      message: message,
      error: error.message,
    });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    await ProductService.removeProduct(req, res);
  } catch (error) {
    const { statusCode, message } = handleSequelizeError(error);

    return res.status(statusCode).send({
      status: false,
      message: message,
      error: error.message,
    });
  }
};
