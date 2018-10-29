import { INIT_CHAT } from '../constants/ActionTypes'
import  * as _  from 'lodash/lodash';
var moment = require('moment');


const initialState = {

};

export function chat(state = initialState, action) {
  switch (action.type) {

      case INIT_CHAT:
          return Object.assign({},state,action.chats);

      default:
          return state;
  }
}
