import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext()
  const { _id, color, size } = singleProduct
  // console.log(singleProduct)

  const [mainSize, setMainSize] = useState(size[0])

  const [amount, setAmount] = useState(1)
  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1

      return newAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1
      if (newAmount <= 1) {
        newAmount = 1
      }
      return newAmount
    })
  }
  // console.log(mainSize)
  return (
    <Wrapper>
      <div className='color'>
        <span>color : </span>
        <div>
          <button className='color-btn' style={{ background: color }}></button>
        </div>
      </div>
      <div className='color'>
        <span>taille : </span>
        <div>
          {size.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainSize === item ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: 'black', color: 'white' }}
                onClick={() => setMainSize(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => {
            addToCart(_id, color, amount, mainSize, singleProduct)
          }}
        >
          Add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .color {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
