import { CardsActionTypes } from './cardsTypes';

export const setCurrentSubject = subject => ({
  type: CardsActionTypes.SET_CURRENT_SUBJECT,
  payload: subject
});

export const addCard = card => ({
  type: CardsActionTypes.ADD_CARD,
  payload: card
});

export const dropCard = card => ({
  type: CardsActionTypes.DROP_CARD,
  payload: card
});

export const addSubject = subject => ({
  type: CardsActionTypes.ADD_SUBJECT,
  payload: subject
});

export const dropSubject = subject => ({
  type: CardsActionTypes.DROP_SUBJECT,
  payload: subject
});

export const setAllCards = cards => ({
  type: CardsActionTypes.SET_ALL_CARDS,
  payload: cards
});
