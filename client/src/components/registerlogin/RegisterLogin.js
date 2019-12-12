import React, { useState } from 'react';
import Register from './register/Register';
import Login from './login/Login';
import { useSpring, animated, config } from 'react-spring';

import './RegisterLogin.scss';

const RegisterLogin = ({ showRegisterLogin, setShowRegisterLogin }) => {
  const [current, setCurrent] = useState('login');

  const animationProps = useSpring({
    opacity: showRegisterLogin ? 1 : 0,
    marginTop: showRegisterLogin ? '20%' : '10%',
    config: config.stiff
  });

  return (
    <animated.div
      style={animationProps}
      className='registerlogin-innercontainer'
    >
      {current === 'login' ? (
        <Login
          setCurrent={setCurrent}
          setShowRegisterLogin={setShowRegisterLogin}
        />
      ) : (
        <Register
          setCurrent={setCurrent}
          setShowRegisterLogin={setShowRegisterLogin}
        />
      )}
    </animated.div>
  );
};

export default RegisterLogin;
