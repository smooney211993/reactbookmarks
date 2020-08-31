const validate = {
  validateUrl(urlValue) {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if (!urlValue.match(regex)) {
      return false;
    } else {
      return true;
    }
  },
  // validates website input
  validateName(nameValue) {
    if (nameValue < 2) {
      return false;
    } else {
      return true;
    }
  },
};

export default validate;
