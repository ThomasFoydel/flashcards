import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/auth/authActions';
import { setAllCards } from 'redux/cards/cardsActions';
import testdata from 'testdata';

import './NavBar.scss';

const NavBar = ({
  setShowRegisterLogin,
  showRegisterLogin,
  isLoggedIn,
  logout,
  setAllCards
}) => {
  const handleLoginClick = () => {
    setShowRegisterLogin(!showRegisterLogin);
  };
  const handleFlashCardsClick = () => {
    setShowRegisterLogin(false);
  };

  const handleLogoutClick = () => {
    logout();
    setAllCards(testdata);
  };
  return (
    <div className='navbar'>
      <div className='navbar-item' onClick={handleFlashCardsClick}>
        Flash Cards
      </div>

      {isLoggedIn ? (
        <div className='navbar-item navbar-logout' onClick={handleLogoutClick}>
          Logout
        </div>
      ) : (
        <div
          className='navbar-item navbar-loginregister'
          onClick={handleLoginClick}
        >
          Login / Register
        </div>
      )}

      {/* <div className='navbar-item'>login</div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setAllCards: cards => dispatch(setAllCards(cards))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
