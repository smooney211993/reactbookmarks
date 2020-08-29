const validatePassword = (password) => {
  const expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
  const regex = new RegExp(expression);
  if (!password.match(regex)) {
    return false;
  }
  return true;
};

export default validatePassword;
