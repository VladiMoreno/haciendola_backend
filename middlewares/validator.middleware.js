const validator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message.replace(/\"/g, ""));

      res.status(422).json({ status: false, message: message });
    }
  };
};
module.exports = validator;
