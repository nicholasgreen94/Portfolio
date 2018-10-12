import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TweenMax, Sine } from 'gsap'
import Arrow from '../assets/images/black_arrow.svg'

class Index extends React.Component{
  render() {
    TweenMax.to('#home_page h1', 2, { opacity: 1, y: 0, ease: Sine.easeOut })
    TweenMax.to('.intro_p p', 1.5, { opacity: 1, y: 0, ease: Sine.easeOut, delay: 0.5 })
    TweenMax.to('#home_page a', 1, { opacity: 1, y: 0, ease: Sine.easeOut, delay: 1 })
    return (
      <div id="home_page">
        <h1>I am a UI / UX Designer and Web Developer</h1>
        <div className="intro_p">
          <p>Hi there, I'm Nick! As stated above I am a UI/UX designer and web developer. Everything I work on is done with purpose and focused on bringing the best experience to the users. I strive to continually grow with my team and bring new ideas with fresh perspectives. I like to work on projects that are challenging and solve them with design, breaking down complex problems into simple solutions.</p>
          <Link to="/projects">View Projects <LinkArrow></LinkArrow></Link>
        </div>
      </div>
    )
  }
}
export default Index

const LinkArrow = styled.span`
   {
    background: url(${Arrow}) no-repeat center center;
    display: inline-block;
    height: 26px;
    transition: 0.26s transform cubic-bezier(.38,.23,.35,1);
    width:  26px;
    position: absolute;
  }
`
