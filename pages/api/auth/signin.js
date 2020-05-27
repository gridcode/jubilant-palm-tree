import nextConnect from "next-connect";
import jwt from "jsonwebtoken";
import connectDb from "middleware/db";
import User from "models/User";
import { useSigninValidator } from "validators";

const handler = nextConnect();

handler.use(useSigninValidator).post(async (req, res) => {
  await connectDb();
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user)
      return res
        .status(400)
        .json({ error: "User with that email doesn't exist" });
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match",
      });
    }
    const {_id, name, email, role, username} = user;
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    const signInResponse = {
      token, user:{_id, username, name, email, role}
    }
    res.setHeader("Set-Cookie", `token=${token}; Httponly; Secure`)
    res.json(signInResponse)
  });
});

export default handler;
