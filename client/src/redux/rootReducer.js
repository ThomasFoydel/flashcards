import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardsReducer from './cards/cardsReducer';
import authReducer from './auth/authReducer';

const persistConfig = {
  // key: 'primary',
  key: 'root',
  storage,
  whitelist: ['auth', 'cards']
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
