import React from 'react'
import MobileNavigation from './MobileNav'
import MainNavigation from './MainNavigation'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.hideMenuOnDesktop = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleMouseDown(e) {
    this.toggleMenu()
    e.stopPropagation()
  }

  render() {
    return (
      <div>
        <header>
          <MobileNavigation handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
          <MainNavigation handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        </header>
      </div>
    )
  }
}

export default Header
