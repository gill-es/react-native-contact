import {configureStore, combineReducers} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import {contacts} from '../slices/contacts';

const reducer = combineReducers({
  contacts: contacts.reducer,
});

const store = configureStore({
  reducer,
  middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
