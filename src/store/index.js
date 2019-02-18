import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountsReducer from '../app/account/reducers';

function configureStore(initialState) {
  const reducers = combineReducers({
    account: accountsReducer,
    form: formReducer
  });
  return createStore(reducers, initialState);
}

export default configureStore;
