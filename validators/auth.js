import { isEmpty, isEmail, isLength } from "validator";

export const signupValidator = ({ name, email, password }) => {
  const errors = {};
  if (isEmpty(name)) errors.name = "Name is required";

  if (isEmpty(email)) errors.email = "Email is required";
  if (!isEmail(email)) errors.email = "Invalid email address";

  if (!isLength(password, { min: 6 }))
    errors.password = "Password should be at least six characters long";

  return errors;
};
export const signinValidator = ({ email, password }) => {
  const errors = [];

  if (isEmpty(email)) errors.email = "Email is required";
  if (!isEmail(email)) errors.email = "Invalid email address";

  if (!isLength(password, { min: 6 }))
    errors.password = "Password should be at least six characters long";

  return errors;
};
