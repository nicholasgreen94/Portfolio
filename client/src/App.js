import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Typekit from 'react-typekit'
import Analytics from 'react-router-ga'
import Header from './components/Head/Header'
import Index from './Pages/Home'
import Work from './Pages/Work'
import ProjectDetail from './Pages/ProjectDetail'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'index',
    }
  }

  componentDidMount() {
    switch (window.location.href) {
      case 'http://localhost:3000/':
      case 'https://www.nicholasgreendesigns.com':
      case 'https://www.nicholasgreendesigns.com/':
        this.setState({
          page: 'index'
        })
        break
      default:
        this.setState({
          page: 'not_index'
        })
        break
    }
  }

  componentWillReceiveProps(nextProps) {
    switch(nextProps.location.pathname) {
      case '/':
        this.setState({
          page: 'index'
        })
        break
      default:
        this.setState({
          page: 'not_index'
        })
        break
    }
  }

  render() {
    return (
      <Route render={({location}) => (
        <div>
          <Analytics id="UA-114430954-1">
            <Typekit kitId="phl2bvx" />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Nicholas Green &#8226; UI / UX Designer and Full-Stack Developer</title>
              <meta name="description" content="I'm a UI / UX Designer and Full Stack Developer, everything I work on is done with purpose and focused on bringing the best experience to the users. I strive to continually grow with my team and bring new ideas with fresh perspectives. I like to work on projects that are challenging and solve them with design, breaking down complex problems into simple solutions." />
              <meta http-equiv="x-ua-compatible" content="ie=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta keywords="Denver, Colorado, UI, UX, User Experience, User Interface, User Interaction, HTML, CSS, JavaScript, Websites, Website Design, Website Developer, Web Developer, Web Designer Colorado, Web Developer Colorado, Web Developer Colorado, Web Designer Colorado, Denver, Nicholas, Green, Nicholas Green, Graphic Design"/>
              <meta name='google-site-verification' content='hyzXFGFjk3fC3uZpibiq6tw6C4RBTDJRB4ARJ9U9PbY' />
              <link rel="apple-touch-icon" sizes="180x180" href="./assets/favicons/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicons/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicons/favicon-16x16.png"/>
              <link rel="manifest" href="./assets/favicons/site.webmanifest"/>
              <link rel="mask-icon" href="./assets/favicons/safari-pinned-tab.svg" color="#000000"/>
              <meta name="msapplication-TileColor" content="#fefefe"/>
              <meta name="theme-color" content="#fefefe"/>
          </Helmet>
          <a href="#skip" id="skip_nav">{"Skip Nav"}</a>
            <div id={this.state.page} >
              <div id="site_content">
                  <Header />
                  <a id="skip">{''}</a>
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={0}
                      classNames="fade"
                    >
                    <Switch location={location}>
                      <Route exact path="/" component={Index} />
                      <Route path="/projects" component={Work} />
                      <Route path="/:id" component={ProjectDetail} />
                    </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                  <Footer/>
                </div>
              </div>
            </Analytics>
          </div>
      )} />
    )
  }
}

const AppRoutes = withRouter(App)

export default AppRoutes;
