import React, { useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setAuthInfo } from 'redux/auth/authActions';
import { setAllCards } from 'redux/cards/cardsActions';

const Login = ({
  setCurrent,
  setAuthInfo,
  setAllCards,
  setShowRegisterLogin
}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmailValue(e.target.value);
        break;
      case 'password':
        setPasswordValue(e.target.value);
    }
  };
  const handleSubmit = async () => {
    const authInfo = await Axios.post('/login', {
      email: emailValue,
      password: passwordValue
    });
    console.log('auth info: ', authInfo);
    if (authInfo.data.message) {
      const { token, email, flashcards, username, userId } = authInfo.data.data;

      setAuthInfo({ email, username, token, userId });
      setAllCards(flashcards);
      setEmailValue('');
      setPasswordValue('');
      setShowRegisterLogin(false);
    }
  };
  return (
    <div className='login-container'>
      <input
        value={emailValue}
        onChange={handleChange}
        type='text'
        name='email'
        placeholder='email'
        className='login-input login-emailinput'
      />
      <input
        value={passwordValue}
        onChange={handleChange}
        type='password'
        name='password'
        placeholder='password'
        className='login-input login-passwordinput'
      />
      <div onClick={handleSubmit} className='login-loginbutton'>
        LOGIN
      </div>
      <br />
      <div
        onClick={() => setCurrent('register')}
        className='login-registerlink'
      >
        register
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setAuthInfo: user => dispatch(setAuthInfo(user)),
  setAllCards: cards => dispatch(setAllCards(cards))
});

const mapStateToProps = state => {
  console.log('state: ', state);
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
