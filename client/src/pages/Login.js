import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useUserContext } from '../context/user_context'

function Login() {
  const { login, error, isFetching } = useUserContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    login({ username, password })
  }
  return (
    <Wrapper className='section-center'>
      <h1 className='title'>SIGN IN</h1>
      <form>
        <input
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} disabled={isFetching}>
          LOGIN
        </button>
        {error && <Error>Something went wrong...</Error>}
        <Link className='link' to='/register'>
          DO NOT YOU REMEMBER THE PASSWORD?
        </Link>
        <Link className='link' to='/register'>
          CREATE A NEW ACCOUNT
        </Link>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 5rem;
  text-align: center;
  width: 30%;
  padding: 20px;
  background-color: white;
  height: 80vh;
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
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: var(--clr-green-ines);
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .link {
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
`
const Error = styled.span`
  color: red;
`
export default Login
