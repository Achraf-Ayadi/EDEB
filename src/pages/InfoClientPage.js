import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageHero } from '../components'

function InfoClientPage() {
  return (
    <>
      <PageHero title='Information de Client' />
      <Wrapper>
        <form className='client-form'>
          <h3>Info de Livraison</h3>
          <div className='infos'>
            <div className='name-infos'>
              <div className='name'>
                <label htmlFor='name'>Nom:</label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor='prename'>Prenom:</label>
                <input type='text' />
              </div>
            </div>
            <label htmlFor='email'>E-Mail:</label>
            <input type='email' />
            <div className='adresse'>
              <label htmlFor='adresse'>Adresse:</label>
              <input type='text' />
              <div className='adresse-infos'>
                <div>
                  <label htmlFor='codepostale'>code Postale:</label>
                  <input type='number' />
                </div>
                <div>
                  <label htmlFor='codepostale'>ville:</label>
                  <input type='text' />
                </div>
              </div>
            </div>
            <div className='condition'>
              <input
                type='checkbox'
                name='condition'
                className='input-condition'
              />
              <label for='condition' className='label-condition'>
                accepter{" "}
                <Link to='/condition'>
                  <b>les condition </b>
                </Link>
                de vente
              </label>
            </div>
          </div>
        </form>

        <Link to='/checkout-2' className='btn'>
          Payer
        </Link>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  margin: 5rem auto;
  flex-direction: column;
  width: 40%;
  display: flex;
  justify-content: center;
  background: var(--clr-grey-9);
  border-radius: 2%;
  padding: 2rem;
  align-items: center;
  h3 {
    padding-bottom: 2rem;
  }
  input {
    width: 100%;
    min-height: 25px;
    border: 0;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    margin-top: 5px;
    border-radius: 4px;
  }
  .label-condition {
    width: 100%;
  }
  .input-condition {
    width: 10%;
  }
  label {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
  }
  .name-infos,
  .adresse-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
      flex-direction: column;
      width: 45%;
      display: flex;
    }
  }
  .client-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 2% 10%;
  }
  .btn {
    margin-top: 1rem;
    width: 30%;
    text-align: center;
  }
  .condition {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    width: 100%;
  }
  @media (max-width: 736px) {
    .name-infos,
    .adresse-infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      div {
        flex-direction: column;
        width: 100%;
        display: flex;
      }
    }
  } ;
`
export default InfoClientPage
