import React from 'react'
import { Switch, Link } from 'react-router-dom'

class MainNavigation extends React.Component {
  render() {
    let visibility = "menu_hidden"
    if (this.props.menuVisibility) {
      visibility = "menu_shown"
    }

    return(
      <div id="main_header">
        <Link to="/"><span id="main_logo" className={visibility}>Nicholas Green</span></Link>
        <div id="menu_icon" onClick={this.props.handleMouseDown} className={visibility}>
          <span></span>
        </div>
        <nav>
          <Switch>
            <ul className="main_nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a href="mailto:nicholasgreendesigns@gmail.com">Email</a></li>
            </ul>
          </Switch>
        </nav>
      </div>
    )
  }
}

export default MainNavigation
