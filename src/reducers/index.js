import { combineReducers } from 'redux';
import EthBalanceReducer from './reducer_ethbalance';
import NanopoolReducer from './reducer_nanopool';
import CryptoPriceReducer from './reducer_cryptoPrice';
import CryptoCoinStatusReducer from './reducer_cryptoCoinStatus';
import LoginReducer from './reducer_login';
import MinerStatusReducer from './reducer_minerStatus';

export default combineReducers({
  ethBalanceReducer: EthBalanceReducer,
  nanopoolReducer: NanopoolReducer,
  cryptoPriceReducer: CryptoPriceReducer,
  cryptoCoinStatusReducer: CryptoCoinStatusReducer,
  loginReducer: LoginReducer,
  minerStatusReducer: MinerStatusReducer
});