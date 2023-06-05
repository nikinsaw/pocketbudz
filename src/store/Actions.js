import { SET_TRANSACTION_DETAILS } from "./Constants"

const saveTransactionDetails = (transactionDetails) => dispatch => {
  dispatch({
    type: SET_TRANSACTION_DETAILS,
    payload: { transactionDetails }
  })
}

export { saveTransactionDetails }