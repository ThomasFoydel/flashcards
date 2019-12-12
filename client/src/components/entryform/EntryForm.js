import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCard, addSubject } from 'redux/cards/cardsActions';

import './EntryForm.scss';

const EntryForm = ({ cards, addCard, addSubject }) => {
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');

  //   console.log('cards from entry form: ', cards);
  const handleChange = e => {
    switch (e.target.name) {
      case 'question':
        setQuestionValue(e.target.value);
        break;
      case 'answer':
        setAnswerValue(e.target.value);
        break;
      case 'subject':
        setSubjectValue(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (questionValue && answerValue && subjectValue) {
      const newCard = {
        question: questionValue,
        answer: answerValue,
        subject: subjectValue
      };

      const existingTopic = cards.filter(
        subject => subject.subjectName === subjectValue
      );
      if (existingTopic.length > 0) {
        addCard(newCard);
      } else {
        addSubject(newCard);
      }
      setQuestionValue('');
      setAnswerValue('');
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className='entryform'>
      {/* <div className='entryform-title'>enter new card:</div> */}
      <div className='entryform-inputcontainer'>
        <textarea
          className='entryform-input entryform-input-question'
          name='question'
          placeholder='question'
          type='text'
          maxLength={200}
          value={questionValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <textarea
          className='entryform-input entryform-input-answer'
          name='answer'
          placeholder='answer'
          type='text'
          maxLength={440}
          value={answerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <input
        className='entryform-input entryform-input-subject'
        name='subject'
        placeholder='subject'
        type='text'
        maxLength={12}
        value={subjectValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className='entryform-submitbutton' onClick={handleSubmit}>
        add card
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.cards
});

const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(addCard(card)),
  addSubject: subject => dispatch(addSubject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
