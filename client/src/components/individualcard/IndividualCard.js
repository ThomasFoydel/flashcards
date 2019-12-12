import React from 'react';
import { connect } from 'react-redux';
import { dropCard } from 'redux/cards/cardsActions';
import { useSpring, animated, config } from 'react-spring';

import './IndividualCard.scss';

const IndividualCard = ({
  setFlip,
  flip,
  card,
  cardNumber,
  setCurrentCardNumber,
  length,
  dropCard
}) => {
  const { question, answer, subject } = card;

  const dropThisCard = () => {
    setFlip(false);
    setTimeout(() => {
      dropCard(card);
      setCurrentCardNumber(0);
    }, 500);
  };

  const flipAnimationProps = useSpring({
    from: { right: -500 },
    right: 0,
    // marginTop: 0,
    // boxShadow: flip
    //   ? '-3rem 3rem 3rem rgba(0, 0, 0, 0.486)'
    //   : '3rem 3rem 3rem rgba(0, 0, 0, 0.486)',
    transform: flip ? 'rotateY(180deg)' : 'rotateY(0deg)',
    config: { mass: 1, tension: 1000, friction: 60 }
  });

  return (
    <>
      {card && (
        <div className='individualcard'>
          <animated.div
            className='individualcard-innercontainer'
            style={flipAnimationProps}
          >
            <div className='individualcardfront'>
              <div className='individualcard-cardnumber'>
                {subject}: {cardNumber} / {length}
              </div>
              question:
              <div className='individualcard-question'>
                <br /> {question}
              </div>
              {/* {!flip && ( */}
              <span
                className='individualcard-answerbutton'
                onClick={() => setFlip(true)}
              >
                see answer
              </span>
              {/* )} */}
            </div>
            <div className='individualcardback'>
              <div className='individualcard-cardnumber'>
                {subject}: {cardNumber} / {length}
              </div>
              <div className='individualcard-dropbutton' onClick={dropThisCard}>
                <i className='fa fa-times fa-2x' />
              </div>
              answer:
              <div className='individualcard-answer'>
                <br /> {answer}
              </div>
              <div
                className='individualcard-backbutton'
                onClick={() => setFlip(false)}
              >
                return to question
              </div>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  dropCard: card => dispatch(dropCard(card))
});

export default connect(null, mapDispatchToProps)(IndividualCard);
