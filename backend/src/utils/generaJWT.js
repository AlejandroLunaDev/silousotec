const jwt = require("jsonwebtoken");
const config = require("../config/config");
const generaJWT = user =>
  jwt.sign({ user }, config.PRIVATE_KEY, { expiresIn: "3h" });

module.exports = generaJWT;
