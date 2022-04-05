import React from 'react'
import styled from 'styled-components'

function Register() {
  return (
    <Wrapper className='section-center'>
      <h1>CREATE AN ACCOUNT</h1>
      <form>
        <input placeholder='name' />
        <input placeholder='last name' />
        <input placeholder='username' />
        <input placeholder='email' />
        <input placeholder='password' />
        <input placeholder='confirm password' />
        <agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </agreement>
        <button>CREATE</button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 5rem auto;
  text-align: center;
  width: 40%;
  padding: 20px;
  background-color: white;

  .title {
    font-size: 24px;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
  }
  button {
    margin-top: 1rem;
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: var(--clr-green-ines);
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
  }
  @media (max-width: 992px) {
    width: 70%;
  }
`
export default Register
