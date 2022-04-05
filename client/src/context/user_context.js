import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/user_reducer'
import { publicRequest } from '../requestMethods'

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

const initialState = {
  name: 'user',
  currentUser: null,
  isFetching: false,
  error: false,
}
const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const login = async (user) => {
    dispatch({ type: LOGIN_START })
    try {
      const res = await publicRequest.post('/auth/login', user)
      const userData = res.data
      dispatch({ type: LOGIN_SUCCESS, payload: userData })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
