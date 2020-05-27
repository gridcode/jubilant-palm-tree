import { signupValidator, signinValidator } from "validators/auth";

export const useSignupValidator = (req, res, next) => {
  const errors = signupValidator(req.body);
  if (Object.keys(errors).length) {
    return res.status(422).json({ errors });
  }
  req.errors = errors;
  next();
};
export const useSigninValidator = (req, res, next) => {
  const errors = signinValidator(req.body);
  if (Object.keys(errors).length) {
    return res.status(422).json({ errors });
  }
  req.errors = errors;
  next();
};
