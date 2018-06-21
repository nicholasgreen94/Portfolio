import React from 'react'
import { Link } from 'react-router-dom'

class MobileNavigation extends React.Component {
  render() {
    let visibility = 'menu_hidden'
    if (this.props.menuVisibility) {
      visibility = 'menu_shown'
    }
    return (
      <div id="mobile_nav" className={visibility}>
        <ul location='pathname'>
          <li><Link to='/'><div className="number">01</div> Home</Link></li>
          <li><Link to='/work'><div className="number">02</div> Work</Link></li>
          <li><Link to='/contact'><div className="number">03</div> Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default MobileNavigation
