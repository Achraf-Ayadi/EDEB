import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import video_Home from '../video/video_home.mp4'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>EDEB</h1>
        <p>
          Grâce au développement d'un réseau international, sont mis à l'honneur
          les trésors enfouis du monde. Découvrez la première collection et
          laissez vous entrainer dans l'univers d'EDEB...
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <video controls autoPlay muted loop className='video-container'>
          <source src={video_Home} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    ${
      '' /* .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    } */
    }
  }
`

export default Hero
