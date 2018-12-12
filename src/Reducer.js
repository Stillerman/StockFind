const initialState = {
  selectedStock: 'AAPL',
  stockInfo: {},
  invalid: false
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "SELECT_STOCK"){
    return {...state, selectedStock: action.payload}
  }
  else if (action.type === "RECIEVE_STOCK") {
    if(!action.data.data.results) return {...state, invalid: true}
    return {...state, stockInfo: action.data.data.results[0], invalid: false}
  }
  else return state
}
export default rootReducer;
