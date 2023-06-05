import produce, { enableES5 } from 'immer'
import { SET_DRAWER_ITEM, SET_TRANSACTION_DETAILS } from './Constants'
const initialState = {
  selectedDrawerItem: 'Day',
  transactionDetails: {}
}

const reducer = (state = initialState, action) => {
  enableES5()
  const { type, payload } = action
  return produce(state, draft => {
    switch (type) {
      case SET_DRAWER_ITEM:
        draft.selectedDrawerItem = payload.selectedDrawerItem
        break
      case SET_TRANSACTION_DETAILS:
        draft.transactionDetails = payload.transactionDetails
        console.log(draft.transactionDetails)
        break
      default:
        break
    }
  })
}

export default reducer