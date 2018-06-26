import React from 'react'
// import styled from 'styled-components'

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
    }
  }

  render() {
    const state = this.state.data
    return (
        <div className="inner_page">
        { state &&
          <h1>{state.name}</h1>
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
        <p className="project_description">{state.description}</p>
        </div>
      )
    }
  }

export default ProjectDetail
