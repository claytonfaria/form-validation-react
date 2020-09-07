const nameValidation = (username) => {
  if (username.trim() === '') {
    return `Username is required`;
  }
  if (/[^a-zA-Z -]/.test(username)) {
    return 'Invalid characters';
  }
  if (username.trim().length < 3) {
    return `Username needs to be at least three characters`;
  }
  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const passwordValidation = (password) => {
  if (!password) {
    return 'Password is required';
  }

  if (password.trim().length < 6) {
    return 'Password needs to be at least six characters';
  }
  return null;
};

const validate = {
  username: nameValidation,
  email: emailValidation,
  password: passwordValidation,
  password2: passwordValidation,
};

export default validate;
