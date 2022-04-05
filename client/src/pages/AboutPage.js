import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import videoAbout from '../video/video_About.mp4'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <video controls autoPlay muted loop className='video-container'>
          <source src={videoAbout} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            La signature EDEB enveloppe la décence, la durabilité, la
            singularité. La part belle est ainsi laissée à la tradition par la
            transmission de savoirs-faire et de styles anciens. Le tout
            agrémenté de contemporanéité.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  video {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
