import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({project}) => (
  <Link to={`/${project.uri_name}`}>
    <img src={project.preview_photo[0]} srcSet={project.preview_photo[0] + ' 1x', project.preview_photo[1] + ' 2x' } alt={project.preview_photo[2]} />
  </Link>
)

export default Project
