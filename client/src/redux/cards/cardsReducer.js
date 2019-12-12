import { CardsActionTypes } from './cardsTypes.js';
import testdata from 'testdata';

const INITIAL_STATE = {
  currentSubject: '',
  cards: testdata
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.SET_ALL_CARDS:
      console.log('set all cards: ', action.payload);
      const cardsPayload = action.payload;
      return { ...state, cards: cardsPayload };
    case CardsActionTypes.SET_CURRENT_SUBJECT:
      return {
        ...state,
        currentSubject: action.payload.currentSubject
      };

    case CardsActionTypes.ADD_CARD:
      const currentSubject = state.cards.filter(
        subject => subject.subjectName === action.payload.subject
      );
      const cardsArrayWithNewCardAdded = [
        ...currentSubject[0].cards,
        action.payload
      ];
      const updatedSubjectArray = {
        subjectName: action.payload.subject,
        cards: cardsArrayWithNewCardAdded
      };
      const nonCurrentSubjectsCardsArrays = state.cards.filter(
        card => card.subjectName !== action.payload.subject
      );
      const updatedAllCardsSubjectsArray = [
        ...nonCurrentSubjectsCardsArrays,
        updatedSubjectArray
      ];
      return { ...state, cards: updatedAllCardsSubjectsArray };

    case CardsActionTypes.DROP_CARD:
      const filteredCardsArray = state.cards.filter(
        subject => subject.subjectName === action.payload.subject
      );
      const subjectToUpdate = filteredCardsArray[0];

      if (subjectToUpdate.cards.length === 1) {
        const subjectArrayMinusCurrentSubject = state.cards.filter(
          subject => subject.subjectName !== action.payload.subject
        );
        return { ...state, cards: subjectArrayMinusCurrentSubject };
      } else {
        const filteredSubject = subjectToUpdate.cards.filter(
          subject => subject !== action.payload
        );
        const subjectWithCardRemoved = {
          subjectName: action.payload.subject,
          cards: filteredSubject
        };
        const subjectsToNotUpdate = state.cards.filter(
          subject => subject.subjectName !== action.payload.subject
        );
        const updatedSubjects = [
          ...subjectsToNotUpdate,
          subjectWithCardRemoved
        ];
        return { ...state, cards: updatedSubjects };
      }

    case CardsActionTypes.ADD_SUBJECT:
      const newSubject = {
        subjectName: action.payload.subject,
        cards: [action.payload]
      };
      const subjectArraysPlusNewArray = [...state.cards, newSubject];
      return {
        ...state,
        cards: subjectArraysPlusNewArray
      };

    case CardsActionTypes.DROP_SUBJECT:
      const filteredCards = state.cards.filter(
        subject => subject.subjectName !== action.payload.subjectName
      );
      return { ...state, cards: filteredCards };
    default:
      return state;
  }
};

export default cardsReducer;
