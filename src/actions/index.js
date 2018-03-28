import axios from 'axios';
import {
  GETBALANCE,
  GETLASTREPORTEDHASHRATE,
  GETPRICINGHISTORYPERMINUTE,
  GETWHATTOMINECRYPTOCURRENCYSTATUS,
  LOGINUSER,
  GETMINERSTATUS
} from './types';

import {
  ETH_API,
  NANOPOOL_API,
  CRYPTOCOMPARE_API,
  LOCAL_API
} from './config';

export function getBalance(address) {
  return dispatch => {
    const request = {
      "jsonrpc": "2.0",
      "method": "eth_getBalance",
      "params": [address, "latest"],
      "id": 1
    }

    axios.post(ETH_API, request)
      .then(response => {
        dispatch({ 
          type: GETBALANCE, 
          payload: response.data.result 
        })
      })
  }
}

export function getLastReportedHashrate(address) {
  return dispatch => {
    axios.get(`${NANOPOOL_API}/reportedhashrates/${address}`)
      .then(response => {
        dispatch({
          type: GETLASTREPORTEDHASHRATE,
          payload: response.data
        })
      })
    }
}

export function getPricingHistoryPerMinute(crypto, currency, sampleSize, exchange) {
  return dispatch => {
    axios.get(`${CRYPTOCOMPARE_API}/histominute?fsym=${crypto}&tsym=${currency}&limit=${sampleSize}&aggregate=3`)
      .then(response => {
        dispatch({
          type: GETPRICINGHISTORYPERMINUTE,
          payload: { "symbol": crypto, "data": response.data.Data }
        })
      })
  }
}

export function getWhatToMineCryptocurrencyStatus() {
  return dispatch => {
    axios.get(`${LOCAL_API}/api/whattomine`)
      .then(response => {
        dispatch({
          type: GETWHATTOMINECRYPTOCURRENCYSTATUS,
          payload: response.data
        })
      })
  }
}

export function loginUser(username) {
  return dispatch => {
    axios.get(`${LOCAL_API}/api/login/${username}`)
      .then(response => {
        dispatch({
          type: LOGINUSER,
          payload: response.data
        })
      }) 
  }
}

export function getMinerStatus(baseEndpoint, wallet, pool, coin) {
  return dispatch => {
    axios.get(`${LOCAL_API}/api/crypto?pool=${pool}&baseapi=${baseEndpoint}&wallet=${wallet}&coin=${coin}`)
      .then(response => {
        dispatch({
          type: GETMINERSTATUS,
          payload: {
            workers: response.data.Workers,
            pool,
            coin
          }
        })
      })
  }
}