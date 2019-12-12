import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const Register = ({ cards, setCurrent }) => {
  const [userNameValue, setUserNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let subscribed = true;
    if (errorMessage) {
      setTimeout(() => {
        if (subscribed) {
          setErrorMessage('');
        }
      }, 4000);
    }
    return () => (subscribed = false);
  }, [errorMessage]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUserNameValue(value);
        break;
      case 'email':
        setEmailValue(value);
        break;
      case 'password':
        setPasswordValue(value);
        break;
      case 'confirmPassword':
        setConfirmPasswordValue(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    console.log('handle submit');
    if (userNameValue && emailValue && passwordValue && confirmPasswordValue) {
      console.log('handle submit2');
      const createdUser = await Axios.post('/register', {
        username: userNameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
        cards: cards
      });
      console.log('created user: ', createdUser);
      if (createdUser.data.err) {
        setErrorMessage(createdUser.data.err);
      } else if (createdUser.data.username) {
        // successful register, go to login
        setCurrent('login');
      }
    }
  };
  return (
    <div className='register-container'>
      <input
        value={userNameValue}
        onChange={handleChange}
        type='text'
        name='username'
        placeholder='username'
        className='register-input register-usernameinput'
      />
      <input
        value={emailValue}
        onChange={handleChange}
        type='text'
        name='email'
        placeholder='email'
        className='register-input register-emailinput'
      />
      <input
        value={passwordValue}
        onChange={handleChange}
        type='password'
        name='password'
        placeholder='password'
        className='register-input register-passwordinput'
      />
      <input
        value={confirmPasswordValue}
        onChange={handleChange}
        type='password'
        name='confirmPassword'
        placeholder='confirm password'
        className='register-input register-confirmpasswordinput'
      />
      <div onClick={handleSubmit} className='register-registerbutton'>
        REGISTER
      </div>
      <br />
      <div onClick={() => setCurrent('login')} className='register-loginlink'>
        i already have an account
      </div>
      {errorMessage && (
        <div className='register-errormessage'>{errorMessage}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.cards
});

export default connect(mapStateToProps)(Register);
