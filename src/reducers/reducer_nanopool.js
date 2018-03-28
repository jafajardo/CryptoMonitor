import {
  GETLASTREPORTEDHASHRATE
} from '../actions/types';

const INITIAL_STATE = {
  lastReportedHashrate: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETLASTREPORTEDHASHRATE: {
      return {...state, lastReportedHashrate: action.payload.data}
    }
    default:
      return state;
  }
}