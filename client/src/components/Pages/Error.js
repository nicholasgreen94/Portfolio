import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class Error extends React.Component {
  render() {
    return(
      <div>
        <Helmet>
          <title>Oh no... Error</title>
          <meta name="description" content="Oh no, something has gone wrong. There's an error" />
        </Helmet>
        <div className="inner_page">
          <h1 className="project_title error">Oh no...</h1>
          <p className="project_description">There's been some error happening. I'm sorry about that, try refreshing the page and if that doesn't work out you can email me to let me know that something is broken.</p>
          <div className="project_link">
            <Link to='/'>Return to Homepage</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
