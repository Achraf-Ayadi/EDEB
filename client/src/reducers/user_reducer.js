import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

const user_reducer = (state, action) => {
  if (action.type === LOGIN_START) {
    return { ...state, isFetching: true }
  }
  if (action.type === LOGIN_SUCCESS) {
    return { ...state, isFetching: false, currentUser: action.payload }
  }
  if (action.type === LOGIN_FAILURE) {
    return { ...state, error: true, isFetching: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer
