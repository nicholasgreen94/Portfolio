import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/images/arrow.svg'

const Index = () => (
    <div id="home_page">
      <h1>I am a UI / UX Designer and Web Developer</h1>
      <div className="intro_p">
        <p>Unicorn etsy messenger bag swag. Brooklyn yr locavore PBR&B kickstarter direct trade mumblecore ramps messenger bag ennui. Trust fund affogato viral, forage celiac you probably haven't heard of them ennui bitters everyday carry crucifix truffaut prism godard hella disrupt. Bitters aesthetic cornhole you probably haven't heard of them lomo succulents franzen disrupt air plant man bun wolf shoreditch biodiesel edison bulb mlkshk.</p>
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
