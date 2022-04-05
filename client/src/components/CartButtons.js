import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { totalItems } = useCartContext()
  const { currentUser } = useUserContext()

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link className='cart-btn' to='/cart' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{totalItems}</span>
        </span>
      </Link>
      <span>
        {currentUser ? (
          <Link className='auth-btn' to='/' onClick={closeSidebar}>
            Logout
          </Link>
        ) : (
          <>
            <Link className='auth-btn' to='/login' onClick={closeSidebar}>
              Login
            </Link>

            <Link className='auth-btn' to='/register' onClick={closeSidebar}>
              Register
            </Link>
          </>
        )}
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-green-ines);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    margin-left: 1rem;
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
