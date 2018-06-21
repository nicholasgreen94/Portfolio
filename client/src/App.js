import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import MyImage from './assets/images/me.jpg'
import Header from './components/Head/Header'
import Index from './components/Pages/Home'
import Work from './components/Pages/Work'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'index'
    }
  }
  render() {
    return (
      <Router>
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
          <Background id={this.state.page}>
            <div id='site_content'>
              <Header />
              <Route exact path="/" component={Index} />
              <Route path="/work" component={Work} />
            </div>
          </Background>
        </div>
      </Router>
    )
  }
}

export default App;

const Background = styled.div`
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${MyImage}) no-repeat bottom center;
  background-position: 0 0;
  background-size: cover;
`
