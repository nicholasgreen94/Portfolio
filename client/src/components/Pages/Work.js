import React from 'react'
import Masonry from 'react-masonry-css'
import Project from './Project'
// import ProjectDetail from './ProjectDetail'

const breakpointColumnsObj = {
  default: 3,
  800: 2,
  600: 1
};

class Work extends React.Component {
  state = {
    data: [],
    error: null,
  }

  async componentDidMount() {
    try {
      const res = await fetch('/api/projects')
      const project = await res.json()
      this.setState({
        data: project.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
     const ProjectList = this.state.data.map(function(project){
        return (
             <div className='project' key={project._id} data-title={project.name}>
               {<Project project={project} />}
             </div>
         )
       })
     return (
         <div className="inner_page">
           <h1>Ahh yeah, projects</h1>
           <div id='projects_wrapper'>
             <Masonry
               breakpointCols={breakpointColumnsObj}
               className="masonry_grid"
               columnClassName="masonry_column">
               {ProjectList}
             </Masonry>
           </div>
         </div>
       )
   }
  }

export default Work
