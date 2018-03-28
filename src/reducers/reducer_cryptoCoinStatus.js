import {
  GETWHATTOMINECRYPTOCURRENCYSTATUS
} from '../actions/types';

const INITIAL_STATE = {
  whatToMineCryptocurrencyStatus: {}
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GETWHATTOMINECRYPTOCURRENCYSTATUS: {
      return {...state, whatToMineCryptocurrencyStatus: action.payload}
    }
  }

  return state;
}