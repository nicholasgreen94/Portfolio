import React from 'react'
import Masonry from 'react-masonry-css'
import { Helmet } from 'react-helmet'
import { TweenMax } from 'gsap'
import Project from './Project'

const breakpointColumnsObj = {
  default: 3,
  800: 2,
  600: 1
};

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: null,
    }
    // this.browserMoved = this.browserMoved.bind(this)
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
    TweenMax.to('h1', 1.25, { opacity: 1, y: 1 })
    TweenMax.staggerTo('.project', 2, { opacity: 1, delay: 1.25 }, 0.25)
  }

  render() {
    window.addEventListener('resize', () => {
      TweenMax.to('.project', 0, { opacity: 1 })
    })
     const ProjectList = this.state.data.map(function(project, i){
        return (
           <div className="project" key={project._id} data-title={project.name}>
             {<Project project={project} />}
           </div>
         )
       })
     return (
       <div>
         <Helmet>
           <title>Projects | Nicholas Green | UI/UX Designer and Developer</title>
           <meta name="description" content="My latest projects from website design, branding, web development and more." />
         </Helmet>
         <div className="inner_page">
             <h1>Projects</h1>
             <div id="projects_wrapper">
               <Masonry
                 breakpointCols={breakpointColumnsObj}
                 className="masonry_grid"
                 columnClassName="masonry_column">
                 {ProjectList}
               </Masonry>
             </div>
          </div>
        </div>
       )
     }
  }

export default Work
