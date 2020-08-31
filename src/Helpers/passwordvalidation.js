const validatePassword = (password) => {
  const expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
  const regex = new RegExp(expression);
  if (!password.match(regex)) {
    return false;
  }
  return true;
};
// validates a that the user password has fulfilled password requirements

export default validatePassword;
