import jwt from "jsonwebtoken";

const TokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};

export default TokenAndCookie;
