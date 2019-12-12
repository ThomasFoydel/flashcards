import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSubject, dropSubject } from 'redux/cards/cardsActions';

const IndividualSubject = ({ subject, setCurrentSubject, dropSubject }) => {
  const changeSubject = () => {
    setCurrentSubject({ currentSubject: subject.subjectName });
  };

  const dropThisSubject = () => {
    dropSubject(subject);
  };
  return (
    <div className='subjectlist-individualsubject'>
      <div
        className='subjectlist-subjectbutton'
        onClick={() => changeSubject()}
      >
        {subject.subjectName}
      </div>

      <div className='subjectlist-dropbutton' onClick={dropThisSubject}>
        <i className='fa fa-times fa-lg subjectlist-dropbutton-x' />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentSubject: subject => dispatch(setCurrentSubject(subject)),
  dropSubject: subject => dispatch(dropSubject(subject))
});

export default connect(null, mapDispatchToProps)(IndividualSubject);
