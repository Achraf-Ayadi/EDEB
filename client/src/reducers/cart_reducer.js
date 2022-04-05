import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { _id, color, singleProduct, mainSize, amount } = action.payload
    const tempItem = state.cart.find(
      (item) => item._id === _id + color + mainSize
    )

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem._id === _id + color + mainSize) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        _id: _id + color + mainSize,
        title: singleProduct.title,
        mainSize,
        color,
        amount,
        img: singleProduct.img[0],
        price: singleProduct.price,
        max: singleProduct.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    let tempCart = state.cart.map((item) => {
      if (item._id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1
          // if (newAmount > item.max) {
          //   newAmount = item.max
          // }

          return { ...item, amount: newAmount }
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => item._id !== action.payload)
    return { ...state, cart: tempCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = amount * price

        cartTotal.totalItems += amount
        cartTotal.totalAmount += itemTotal
        return cartTotal
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    )

    return { ...state, totalItems, totalAmount }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
