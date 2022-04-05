import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/client_reducer'
import {
  UPDATE_CLIENT,

  // CLEAR_FILTERS,
} from '../actions'

const initialState = {
  name: '',
  prename: '',
  email: '',
  adresse: '',
  codePostal: '',
  ville: '',
  condition: '',
}

const Context = React.createContext()

export const ClientProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateClient = (e) => {
    // updateFilter ACTION
    let value = e.target.value
    let name = e.target.name

    if (name === 'name') {
      // value = e.target.value
    }
    if (name === 'condition') {
      value = e.target.checked
      
    }

    dispatch({ type: UPDATE_CLIENT, payload: { value, name } })

    // console.log(name, value)
  }
  return (
    <Context.Provider
      value={{
        ...state,
        updateClient,
      }}
    >
      {children}
    </Context.Provider>
  )
}
// make sure use
export const useClientContext = () => {
  return useContext(Context)
}
