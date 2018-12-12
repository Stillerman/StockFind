import axios from 'axios'

export function selectStock (stockName) {
  return {
    type: "SELECT_STOCK",
    payload: stockName
  }
}

export function recieveStock (name, json) {
  return {
    type: "RECIEVE_STOCK",
    name,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchInfo (symb) {
  return function (dispatch) {
    axios.get("https://marketdata.websol.barchart.com/getQuote.json?apikey=8739705ef7eabc945a1ef3c07196af13&fields=tick,symbol,exchange,name,netChange,percentChange,lastPrice,volume&symbols="+symb)
    .then(resp => {
      dispatch(recieveStock(symb, resp))
    })
  }
}

export default selectStock
