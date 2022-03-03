import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// import CheckoutForm from '../components/CheckoutForm'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page section section-center'>
        {cart.length >= 1 ? (
          <>
            <StripeCheckout />
          </>
        ) : (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage
