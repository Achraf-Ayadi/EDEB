import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { DataProducts } from '../utils/Data'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  loading_products: false,
  error_products: false,
  products: [],
  featuredProducts: [],
  loading_singleProduct: false,
  error_singleProduct: false,
  singleProduct: {},
}

const ProductsContext = React.createContext()
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProducts = (DataProducts) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const products = DataProducts

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }

  const fetchSingleProduct = (num, data) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const product = data.filter((item) => num === item.id)

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchProducts(DataProducts)
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
