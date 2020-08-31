import React, { useState } from 'react';
import fetchDataBase from '../../Utils/database';
import validateEmail from '../../Helpers/emailvalidation';
import validateName from '../../Helpers/namevalidation';
import validatePassword from '../../Helpers/passwordvalidation';

const Sigin = (props) => {
  const { onRouteChange, route, loadUser, loadBookMarks, setLoader } = props;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  //input values
  const [validFormState, setIsValidFormState] = useState({
    name: true,
    email: true,
    password: true,
  });
  // error state
  const handleFormStateChange = (key) => (event) => {
    setFormState({
      ...formState,
      [key]: event.target.value,
    });
  };
  // onchange function
  const registerUser = async () => {
    const { name, email, password } = formState;
    const isValidName = validateName(name);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    // checks that the inputs are valid
    setIsValidFormState({
      name: isValidName,
      email: isValidEmail,
      password: isValidPassword,
    });
    // if there are errors, the values will be false in which will render the error message that is dependant on it
    if (!isValidName || !isValidEmail || !isValidPassword) {
      return;
    }
    try {
      const user = await fetchDataBase.register(name, email, password);
      if (user) {
        setLoader(true);
        loadUser(user);
        onRouteChange('home');
      } else {
        throw new Error('unable to register User');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    // if all input values are valid, the register function will post the details to the database which will
    // return the new registered user. Loader will always be set to true in the start of the try block and will always be set to false in the finally. this will show the loading bar regardless of success or fail
  };
  const signInUser = async () => {
    const { email, password } = formState;
    try {
      setLoader(true);
      const { user, bookmarks } = await fetchDataBase.signIn(email, password);
      if (user) {
        loadUser(user);
        onRouteChange('home');
        loadBookMarks(bookmarks);
      } else {
        throw new Error('unable to signin');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    // same functionality as the register but the fetch will recieve a pre-existing user
  };

  const renderRegisterForm = () => {
    if (route === 'register') {
      return (
        <div className='form-group'>
          <label htmlFor='website-name' className='form-label'>
            {' '}
            First Name
          </label>
          <input
            type='text'
            className='form-input'
            id='website-name'
            onChange={handleFormStateChange('name')}
            value={formState.name}
          />
          {!validFormState.name ? 'Please enter your name' : <></>}
        </div>
      );
    }
    // if user clicks on the register form, the route state changes and the render form will appear
  };

  return (
    <div className='modal-container ' id='modal'>
      <div className='modal'>
        <div className='modal-header'>
          <h3>{route === 'register' ? 'Register' : 'Sign In'}</h3>
        </div>
        <div className='modal-content'>
          {renderRegisterForm()}
          <br />
          <div className='form-group'>
            <label htmlFor='website-url' className='form-label'>
              Email{' '}
            </label>
            <input
              type='text'
              className='form-input'
              id='website-url'
              onChange={handleFormStateChange('email')}
              value={formState.email}
            />
            {!validFormState.email ? 'Please use a valid email address' : <></>}
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='website-name' className='form-label'>
              {' '}
              Password
            </label>
            <input
              type='password'
              className='form-input'
              id='website-name'
              onChange={handleFormStateChange('password')}
              value={formState.password}
            />
          </div>
          {!validFormState.password ? (
            <>
              "Password must contain minimum eight characters, at least one
              uppercase letter, one lowercase letter and one number"
            </>
          ) : (
            <></>
          )}
          <br />
          {route === 'signin' ? (
            <>
              {' '}
              <button type='button' onClick={signInUser}>
                Sign in
              </button>{' '}
              <button
                type='button'
                onClick={(e) => onRouteChange('register')}
                className='register-button'>
                Register
              </button>
            </>
          ) : (
            <>
              <button type='button' onClick={registerUser}>
                Register
              </button>
              <button
                type='button'
                className='signin-button'
                onClick={(e) => {
                  onRouteChange('signin');
                  setIsValidFormState({
                    name: true,
                    email: true,
                    password: true,
                  });
                }}>
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sigin;
