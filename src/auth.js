const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Initialize req.user if it doesn't exist
    if (!req.user) {
      req.user = {};
    }
    // Set userId property on req.user
    req.user.userId = decoded.userId; // Assuming decoded contains the userId
    next();
  });
};

module.exports = authenticateToken;
