import {
  GETPRICINGHISTORYPERMINUTE
} from '../actions/types';

const INITIAL_STATE = {
  cryptoPricePerMinute: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETPRICINGHISTORYPERMINUTE: {
      return {...state, cryptoPricePerMinute: [...state.cryptoPricePerMinute, action.payload]}
    }
    default:
      return state;
  }
}