import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useCartContext } from '../context/cart_context'
// import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link, useHistory } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { publicRequest, userRequest } from '../requestMethods'
import axios from 'axios'

const KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY

const CartTotals = () => {
  // const { loginWithRedirect, myUser } = useUserContext()
  const { shippingfree, totalAmount, cart } = useCartContext()
  const [stripeToken, setStripeToken] = useState(null)
  const [condition, setCondition] = useState('')
  const history = useHistory()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: totalAmount,
        })

        history.push('/success', {
          stripeData: res.data,
          products: cart,
        })
      } catch {}
    }
    stripeToken && makeRequest()
  }, [stripeToken, totalAmount, history])
  console.log(cart)
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            shipping free: <span>{formatPrice(shippingfree)}</span>
          </p>
          <hr />
          <h4>
            order Total: <span>{formatPrice(shippingfree + totalAmount)}</span>
          </h4>
        </article>
        <div className='condition'>
          <input
            name='condition'
            type='checkbox'
            className='inputCondition'
            value={condition}
            onChange={(e) => {
              setCondition(e.target.checked)
            }}
          />
          <label htmlFor='condition' className='labelCondition'>
            Accepter{' '}
            <Link to='/condition'>
              <b>les conditions </b>
            </Link>
            du vente
          </label>
        </div>
        <StripeCheckout
          name='EDEB'
          image='https://i.ibb.co/rfmhDb4/aiguille-screen-2.png'
          billingAddress
          shippingAddress
          description={`Your total is ${formatPrice(
            shippingfree + totalAmount
          )}`}
          amount={shippingfree + totalAmount}
          currency='EUR'
          token={onToken}
          stripeKey={KEY}
        >
          {condition ? (
            <button className='btn'>proceed to checkout</button>
          ) : (
            <button className='btn' style={{ cursor: 'not-allowed' }} disabled>
              proceed to checkout
            </button>
          )}
        </StripeCheckout>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  .condition {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    width: 100%;
  }
  .labelCondition {
    width: 100%;
  }
  .inputCondition {
    width: 10%;
  }
  .btn {
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
