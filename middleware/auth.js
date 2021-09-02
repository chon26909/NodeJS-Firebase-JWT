const { admin } = require("../database/firebase");

const vertifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send({ message: "Unauthorized" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = await admin.auth().verifyIdToken(token);

    if (decode) {
      req.uid = decode.uid;
      return next();
    } 
    else {
      return res.json({ message: "Unauthorized" });
    }
  } 
  catch (error) {
    return res.json({ message: "Invalid Token" });
  }
};

module.exports = vertifyToken;
