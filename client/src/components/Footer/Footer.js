import React from 'react'
import { TweenMax, Sine } from 'gsap'

class Footer extends React.Component {
  render() {
    TweenMax.to('#main_footer', 1.25, { opacity: 1, ease: Sine.easeOut, delay: 2 })
    return (
      <div>
        <footer id="main_footer">
          <ul id="social_media">
            <li><a href="https://dribbble.com/nicholasgreendesigns" target="_blank" title="Link to a new page" rel="noopener noreferrer" className="dribbble">Dribbble</a></li>
            <li><a href="https://www.behance.net/nicholasgr06ff" target="_blank" title="Link to a new page" rel="noopener noreferrer" className="behance">Behance</a></li>
            <li><a href="https://www.instagram.com/nicholasgreen.91/" target="_blank" title="Link to a new page" rel="noopener noreferrer" className="instagram">Instagram</a></li>
            <li><a href="https://github.com/nicholasgreen94" target="_blank" title="Link to a new page" rel="noopener noreferrer" className="github">Github</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Footer
