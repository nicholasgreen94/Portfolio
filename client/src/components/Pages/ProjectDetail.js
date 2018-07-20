import React from 'react'
import { Helmet } from 'react-helmet'
import { TweenMax, Sine } from 'gsap'
import Error from './Error'

class ProjectDetail extends React.Component{
    state = {
      data: [],
      error: null,
    }


  async componentDidMount() {
    try {
      const res = await fetch(`/api/${this.props.match.params.id}`)
      const project = await res.json()
      this.setState({
        data: project.data[0]
      })
    } catch (err) {
      console.log(err)
      this.setState({ error: true })
    }
    TweenMax.to('h1', 1.25, { opacity: 1, y: 1, ease: Sine.easeOut  })
    TweenMax.to('.tag_wrapper', 2, { opacity: 1, y: 1, ease: Sine.easeOut, delay: 0.5 })
    TweenMax.staggerTo('.photo', 2, { opacity: 1, y: 1, ease: Sine.easeOut, delay: 3 }, 1)
  }

  render() {
    const state = this.state.data
    return (
      <div>
      { this.state.error &&
        <Error />
      }
        <Helmet>
          <title>{`${state.name}`} | Nicholas Green | UI/UX Designer and Developer</title>
          <meta name="description" content={`${state.description}`} />
        </Helmet>
        <div className="inner_page">
          { state &&
            <h1 className="project_title">{state.name}</h1>
          }
          { state && state.tags &&
            <div className="tag_wrapper">{
              state.tags.map((tag, i) => {
                  if ( i === state.tags.length - 1 ) {
                    return <span key={i} className="project_tags">{tag}</span>
                  } else {
                    return <span key={i} className="project_tags">{tag + ','}</span>
                  }
                })
              }
            </div>
          }
          { state && state.photos &&
            <div>
              <p className="project_description">{state.description}</p>
              <div className="project_link"><a href={state.url} target="_blank" title="Link to a new page" rel="noopener">{state.view_button_text}</a></div>
                <div id="photos">
                  { state.photos.map((photo, i) => {
                      return <div className={`photo photo_${i}`} key={i}><img src={photo[0]} srcSet={photo[0] + ' 1x,' + photo[1] + ' 2x'} alt={photo[2]} /></div>
                  })
              }
              </div>
              </div>
          }
          </div>
        </div>
      )
    }
  }

export default ProjectDetail
