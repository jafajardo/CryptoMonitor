import {
  LOGINUSER
} from '../actions/types';

const INITIAL_STATE = {
  loginCredential: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGINUSER: {
      return {...state, loginCredential: action.payload}
    }
  }
  return state;
}