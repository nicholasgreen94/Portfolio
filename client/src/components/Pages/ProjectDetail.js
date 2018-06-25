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
          <h1>{state.name}</h1>
        </div>
      )
    }
  }

export default ProjectDetail
