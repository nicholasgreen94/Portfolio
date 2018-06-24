import React from 'react'
import styled from 'styled-components'

class ProjectDetail extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
     }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = (props) => {
    const id = this.props.match.params.id
    fetch(`/api/${id}`)
    .then(data => data.json())
    .then((res) => {
      if (!res.success) this.setState({ error: res.error });
      else this.setState({ data: res.data[0] });
    });
  }

  render() {
    const state = this.state.data
    console.log(state)
    return (
        <div className="inner_page">
          <h1>{state.name}</h1>
        </div>
      )
    }
  }

export default ProjectDetail
