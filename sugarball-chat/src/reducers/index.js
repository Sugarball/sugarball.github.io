import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
//import { reducer as formReducer } from 'redux-form';
import { chat } from './chat';

const rootReducer = combineReducers({
  //form: formReducer,
  routing: routeReducer,
  /* your reducers */
  chat

});

export default rootReducer;
