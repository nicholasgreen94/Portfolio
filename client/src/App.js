import React from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Head/Header'
import Index from './components/Pages/Home'
import Work from './components/Pages/Work'
import ProjectDetail from './components/Pages/ProjectDetail'
const Barba = require('barba.js')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'index'
    }
  }


  componentDidMount() {
    if (window.location.href === 'http://localhost:3000/') {
      this.setState({
        page: 'index'
      })
    } else {
      this.setState({
        page: 'not_index'
      })
    }
    Barba.Pjax.start()
    var FadeTransition = Barba.BaseTransition.extend({
      start: function() {
        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },

      fadeOut: function() {
        return this.oldContainer.velocity({ opacity: 1 }, { duration: 1000 }).promise();
      },

      fadeIn: function() {
        var _this = this;
        var $el = this.newContainer

        this.oldContainer.hide();
        $el.velocity({
          visibility : 'visible',
          opacity : 0
        });
         $el.velocity({ opacity: 1 }, {duration: 400}, function() {
           _this.done();
         });
      }
    });
    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };
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
          <script src='//cdnjs.cloudflare.com/ajax/libs/velocity/2.0.3/velocity.min.js'></script>
        </Helmet>
        <Link to='#site_content'></Link>
        <div id="barba-wrapper">
          <div className="barba-container">
            <div id={this.state.page}>
              <div id='site_content'>
                <Header />
                  <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/projects" component={Work} />
                    <Route path="/:id" component={ProjectDetail} />
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const AppRoutes = withRouter(App)

export default AppRoutes;
