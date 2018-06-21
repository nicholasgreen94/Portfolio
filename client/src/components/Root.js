import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import MyImage from '../assets/images/me.jpg'
import Header from '../components/Head/Header'
import IndexPage from '../components/Pages/Home'

class Root extends Component {
  render() {
  if (window.location.href === 'http://localhost:3000/' || 'http://nicholasgreendesigns.com/') {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nicholas Green | UI/UX Designer and Developer</title>
          <meta description="Site" />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta keywords="HTML, CSS, JavaScript, Websites, Website Design, Website Developer, Web Designer Phoenix, Web Developer Phoenix, Web Designer Arizona, Web Developer Arizona, Web Developer Tucson, Web Desiginer Tucson, Phoenix, Tucson, Arizona, Nicholas, Green, Nicholas Green, Graphic Design"/>
          <meta name='google-site-verification' content='hyzXFGFjk3fC3uZpibiq6tw6C4RBTDJRB4ARJ9U9PbY' />
          <link rel='stylesheet' href='https://use.typekit.net/phl2bvx.css' />
          <link rel="canonical" href="http://nicholasgreendesigns.com/" />
        </Helmet>
        <Link to='#site_content'></Link>
        <Background id="index">
          <div id='site_content'>
            <Header />
            <IndexPage />
          </div>
        </Background>
      </div>
    )
  } else {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nicholas Green | UI/UX Designer and Developer</title>
          <meta description="Site" />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta keywords="HTML, CSS, JavaScript, Websites, Website Design, Website Developer, Web Designer Phoenix, Web Developer Phoenix, Web Designer Arizona, Web Developer Arizona, Web Developer Tucson, Web Desiginer Tucson, Phoenix, Tucson, Arizona, Nicholas, Green, Nicholas Green, Graphic Design"/>
          <meta name='google-site-verification' content='hyzXFGFjk3fC3uZpibiq6tw6C4RBTDJRB4ARJ9U9PbY' />
          <link rel='stylesheet' href='https://use.typekit.net/phl2bvx.css' />
          <link rel="canonical" href="http://nicholasgreendesigns.com/" />
        </Helmet>
        <Link to='#site_content'></Link>
          <div id='site_content'>
            <Header />
          </div>
      </div>
      )
    }
  }
}

export default Root

const Background = styled.div`
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${MyImage}) no-repeat bottom center;
  background-position: 0 0;
  background-size: cover;
`
