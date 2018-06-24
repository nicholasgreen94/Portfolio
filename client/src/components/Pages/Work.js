import React from 'react'
import API from './../../utils/API'
// import Project from './Project'
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 2
};

class Work extends React.Component{
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

  loadData = () => {
    fetch('/api/work/')
    .then(data => data.json())
    .then((res) => {
      console.log(res.data)
      if (!res.success) this.setState({ error: res.error });
      else this.setState({ data: res.data });
    });
  }

  render() {
    return (
        <div className="inner_page">
          <h1>Work</h1>

        </div>
      )
    }
  }

export default Work
