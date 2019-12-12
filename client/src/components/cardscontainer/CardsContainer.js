import React, { useState, useEffect } from 'react';
import IndividualCard from 'components/individualcard/IndividualCard';
import { connect } from 'react-redux';
import { setCurrentSubject } from 'redux/cards/cardsActions';

import './CardsContainer.scss';

const CardsContainer = ({ currentSubject, cards, setCurrentSubject }) => {
  const [flip, setFlip] = useState(false);
  const [currentCardNumber, setCurrentCardNumber] = useState(0);
  const filteredData = cards.filter(
    subject => subject.subjectName === currentSubject
  );
  const currentSubjectData = filteredData[0];

  useEffect(() => {
    if (!currentSubjectData) {
      setCurrentSubject('');
    }
  }, [cards, currentSubjectData, setCurrentSubject]);

  useEffect(() => {
    setCurrentCardNumber(0);
  }, [currentSubject]);

  const increment = () => {
    setFlip(false);
    const timeoutTime = flip ? 500 : 0;
    setTimeout(() => {
      if (currentCardNumber < currentSubjectData.cards.length - 1) {
        setCurrentCardNumber(num => num + 1);
      } else {
        setCurrentCardNumber(0);
      }
    }, timeoutTime);
  };

  const decrement = () => {
    setFlip(false);
    const timeoutTime = flip ? 500 : 0;
    setTimeout(() => {
      if (currentCardNumber > 0) {
        setCurrentCardNumber(num => num - 1);
      } else {
        setCurrentCardNumber(currentSubjectData.cards.length - 1);
      }
    }, timeoutTime);
  };

  return (
    <div className='cardcontainer'>
      {currentSubjectData && currentSubjectData.cards[currentCardNumber] && (
        <>
          <IndividualCard
            flip={flip}
            setFlip={setFlip}
            card={currentSubjectData.cards[currentCardNumber]}
            length={currentSubjectData.cards.length}
            cardNumber={currentCardNumber + 1}
            setCurrentCardNumber={setCurrentCardNumber}
          />
          <div className='cardcontainer-buttoncontainer'>
            <div className='cardcontainer-previousbutton' onClick={decrement}>
              previous
            </div>
            <div className='cardcontainer-nextbutton' onClick={increment}>
              next
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentSubject: state.cards.currentSubject,
    cards: state.cards.cards
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentSubject: subject => dispatch(setCurrentSubject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
