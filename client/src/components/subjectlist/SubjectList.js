import React from 'react';
import { connect } from 'react-redux';
import IndividualSubject from 'components/subjectlist/IndividualSubject';
import SaveButton from 'components/subjectlist/SaveButton';

import './SubjectList.scss';

const SubjectList = ({ cards, setShowRegisterLogin }) => {
  console.log('cards: ', cards);
  return (
    <div className='subjectlist'>
      <div className='subjectlist-subjectcontainer'>
        {cards.map((subject, i) => (
          <IndividualSubject subject={subject} key={i} />
        ))}
      </div>
      <SaveButton setShowRegisterLogin={setShowRegisterLogin} />
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.cards
});

export default connect(mapStateToProps)(SubjectList);
