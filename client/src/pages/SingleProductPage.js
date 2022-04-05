import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import TableSize from '../components/TableSize'
import { formatPrice } from '../utils/helpers'

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {
    singleProduct,
    fetchSingleProduct,
    error_singleProduct: error,
    loading_singleProduct: loading,
  } = useProductsContext()
  const { _id } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetchSingleProduct('/products/find/' + _id)
    // eslint-disable-next-line
  }, [_id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 10000)
    }
    // eslint-disable-next-line
  }, [error])

  const { inStock, price, img, title, desc } = singleProduct

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper>
      <PageHero title={title} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          {img && <ProductImages images={img} />}
          <section className='content'>
            <h2>{title}</h2>

            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{desc}</p>
            <TableSize />

            <p className='info'>
              <span>available : </span>
              {`${inStock ? 'in stock' : ' out of stock'}`}
            </p>
            <hr />
            {inStock && <AddToCart singleProduct={singleProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-green-ines);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
