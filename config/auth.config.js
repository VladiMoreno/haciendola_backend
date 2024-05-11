const { JWT_TOKEN } = process.env;

module.exports = {
  secret: JWT_TOKEN,
};
