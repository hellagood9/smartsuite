const jwt = require("jsonwebtoken");
const config = require("../config");

console.log("config.JWT_SECRET", config.JWT_SECRET);

const getToken = (user) => {
  const { _id, name, email, isAdmin } = user;

  return jwt.sign(
    {
      _id,
      name,
      email,
      isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

module.exports = getToken;
