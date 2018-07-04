import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Typekit from 'react-typekit';
import Header from './components/Head/Header'
import Index from './components/Pages/Home'
import Work from './components/Pages/Work'
import ProjectDetail from './components/Pages/ProjectDetail'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'index',
    }
  }

  componentDidMount() {
    if (window.location.href === 'http://localhost:3000/' || window.location.href === 'https://nicholasgreendesigns.herokuapp.com/') {
      this.setState({
        page: 'index'
      })
    } else {
      this.setState({
        page: 'not_index'
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === '/') {
      this.setState({
        page: 'index'
      })
    } else {
      this.setState({
        page: 'not_index'
      })
    }
  }

  render() {
    return (
      <Route render={({location}) => (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Nicholas Green | UI/UX Designer and Developer</title>
            <meta name="description" content="I am a web designer and developer living in Tucson, AZ. Along with designing an developing websites, I help with website optimization, content, and marketing." />
            <meta http-equiv='x-ua-compatible' content='ie=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta keywords="HTML, CSS, JavaScript, Websites, Website Design, Website Developer, Web Designer Phoenix, Web Developer Phoenix, Web Designer Arizona, Web Developer Arizona, Web Developer Tucson, Web Desiginer Tucson, Phoenix, Tucson, Arizona, Nicholas, Green, Nicholas Green, Graphic Design"/>
            <meta name='google-site-verification' content='hyzXFGFjk3fC3uZpibiq6tw6C4RBTDJRB4ARJ9U9PbY' />
          </Helmet>
          <Typekit kitId="phl2bvx" />
          <a to='#skip' id="skip_nav">{"Skip Nav"}</a>
            <div id={this.state.page} >
              <div id='site_content'>
                <Header />
                <a id="skip"></a>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={0}
                    classNames='fade'
                  >
                <Switch location={location}>
                  <Route exact path="/" component={Index}/>
                  <Route path="/projects" component={Work} />
                  <Route path="/:id" component={ProjectDetail} />
                </Switch>
                  </CSSTransition>
                </TransitionGroup>
                </div>
            </div>
          </div>
      )} />
    )
  }
}

const AppRoutes = withRouter(App)

export default AppRoutes;
