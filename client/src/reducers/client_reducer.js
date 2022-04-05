import { UPDATE_CLIENT, CLEAR_FILTERS } from '../actions'
// import products_reducer from './products_reducer'

const filter_reducer = (state, action) => {
  if (action.type === UPDATE_CLIENT) {
    const { name, value } = action.payload
  
    return { ...state, [name]: value }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
