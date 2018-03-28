import { 
  GETBALANCE
} from '../actions/types';

const INITIAL_STATE = {
  ethBalance: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETBALANCE: {
      return { ...state, ethBalance: action.payload }
    }
    default:
      return state;
  }
}