import React from 'react';

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {
  return (
    <div className='container'>
      <form id='form' className='form' onSubmit={handleSubmit}>
        <h2>Register with Us</h2>
        <div className='form-control'>
          <label htmlFor='username'>
            Username
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id='username'
              type='text'
              placeholder='Enter username'
              name='username'
              value={values.username}
              required
            />
            {touched.username && errors.username}
          </label>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>
            Email
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id='email'
              type='text'
              placeholder='Enter email'
              name='email'
              value={values.email}
              required
            />
            {touched.email && errors.email}
          </label>
        </div>
        <div className='form-control'>
          <label htmlFor='password'>
            Password
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id='password'
              type='password'
              placeholder='Enter password'
              name='password'
              value={values.password}
              required
            />
            {touched.password && errors.password}
          </label>
        </div>
        <div className='form-control'>
          <label htmlFor='password2'>
            Confirm Password
            <input
              type='password'
              placeholder='Enter password'
              name='password2'
              onChange={handleChange}
              onBlur={handleBlur}
              id='password2'
              required
            />
            {touched.password2 && errors.password2}
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default Form;
