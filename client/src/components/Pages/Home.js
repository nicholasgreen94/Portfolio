import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/images/arrow.svg'

const Index = () => (
    <div id="home_page">
      <h1>I am a UI / UX Designer and Web Developer</h1>
      <div className="intro_p">
        <p>Hi there, I'm Nick! As stated above I am a UI/UX and web developer. Everything I work on is done with purpose and focused on bringing the best experience to the users. I strive to continually grow with my team and bring new ideas with fresh perspectives. I like to work on projects that are challenging and solve them with design, breaking down complex problems into simple solutions.</p>
        <Link to="/Projects">View Projects <LinkArrow></LinkArrow></Link>
      </div>
    </div>
)

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
