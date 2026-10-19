
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token,"toekekekekeek");
    

    if (!token) {
      return res.status(401).json({
        msg: "Token missing. Please login first.",
      });
    }

    const decoded = jwt.verify(token, "hehehehehehehehehe");
    console.log(decoded,"dededededededed");
    

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        msg: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid or expired token",
    });
  }
};

module.exports = auth;
