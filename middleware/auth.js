import jwt from "jsonwebtoken";
export const requireSignIn = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; //Remove 'Bearer' string
  try {
    let decoded = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
  next();
};
