import React, { useState } from 'react';
import Form from './Form';
import Debug from './Debug';

function FormValidation({ validate }) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Change event handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Save fields
    setValues({
      ...values,
      [name]: value,
    });

    // Was field modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // remove whatever error was there
    const { [name]: removedError, ...rest } = errors;

    // Check for new error
    const error = validate[name](value);

    // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.password !== values.password2) {
      setErrors({ password2: 'Passwords does not match' });
    } else {
      // validate the form
      const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: {
              ...acc.errors,
              ...(newError && { [key]: newError }),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        },
        {
          errors: { ...errors },
          touched: { ...touched },
        }
      );
      setErrors(formValidation.errors);
      setTouched(formValidation.touched);

      if (
        !Object.values(formValidation.errors).length &&
        Object.values(formValidation.touched).length ===
          Object.values(values).length &&
        Object.values(formValidation.touched).every((t) => t === true)
      ) {
        alert(JSON.stringify(values, null, 2));
      }
    }
  };
  return (
    <>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      <Debug errors={errors} touched={touched} />
    </>
  );
}

export default FormValidation;
