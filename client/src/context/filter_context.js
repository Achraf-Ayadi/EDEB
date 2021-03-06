import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  allProducts: [],
  filtredProducts: [],
  gridView: true,
  sort: 'Price(lowest)',
  filters: {
    text: '',
    category: 'all',
    color: 'all',
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

  const updateSort = (e) => {
    const value = e.target.value

    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const updateFilter = (e) => {
    // updateFilter ACTION
    let value = e.target.value
    let name = e.target.name

    if (name === 'category') {
      value = e.target.textContent
      console.log(name, value)
    }
    if (name === 'color') {
      value = e.target.dataset.color
      // console.log(value)
    }
    if (name === 'price') {
      value = Number(value)
    }
    dispatch({ type: UPDATE_FILTERS, payload: { value, name } })
  }
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  // console.log(state.allProducts)
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
