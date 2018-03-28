import {
  GETMINERSTATUS
} from '../actions/types';

const INITIAL_STATE = {
  minerStatus: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GETMINERSTATUS: {
      return { ...state, minerStatus: [...state.minerStatus, action.payload] }
    }
  }

  return state;
}