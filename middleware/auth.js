const { admin } = require("../database/firebase");

const vertifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send({ message: "Unauthorized" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = admin.auth().verifyIdToken(token);
    if (decode) {
      return next();
    } else {
      return res.json({ message: "Unauthorized" });
    }
  } catch (error) {
    return res.json({ message: "Internal Error" });
  }
};

module.exports = vertifyToken;
