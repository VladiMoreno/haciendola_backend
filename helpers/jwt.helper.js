const jwt = require("jsonwebtoken");
const config = require("#config/auth.config.js");

function encodeRegistrationToken(userId) {
  // The information we need to find our user in the database (not sensible info)
  let info = { id: userId };

  // The hash we will be sending to the user
  const token = jwt.sign(info, config.secret);

  return token;
}

function decodeRegistrationToken(token) {
  let decoded = jwt.verify(token, config.secret);
  // console.log(decoded, 'DECODED');

  let userId = decoded.id;

  // Check that the user didn't take too long
  let dateNow = Math.floor(Date.now() / 1000);
  let tokenTime = decoded.iat * 1000;

  // Two hours
  let hours = 2;
  let tokenLife = hours * 60 * 1000;

  // User took too long to enter the code
  if (tokenTime + tokenLife < dateNow) {
    return {
      expired: true,
    };
  }

  // User registered in time
  return {
    userId,
  };
}

module.exports = { encodeRegistrationToken, decodeRegistrationToken };
