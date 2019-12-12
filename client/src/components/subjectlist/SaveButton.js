import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const SaveButton = ({ cards, token, isLoggedIn, setShowRegisterLogin }) => {
  const handleSave = async () => {
    const savedCards = await Axios.post('/savecards', cards, {
      headers: { 'x-auth-token': token }
    });
    console.log('savedCards: ', savedCards.data.updatedUser);
  };

  const handleLoginClick = () => {
    setShowRegisterLogin(true);
  };

  return (
    <div className='subjectlist-savebuttoncontainer'>
      {isLoggedIn ? (
        <div className='subjectlist-savebutton' onClick={handleSave}>
          save
        </div>
      ) : (
        <div className='subjectlist-nosavebutton' onClick={handleLoginClick}>
          login to save
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.cards,
  token: state.auth.token,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(SaveButton);
