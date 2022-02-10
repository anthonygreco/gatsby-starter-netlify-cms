import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '../../templates/projects-page'

const ProjectsPagePreview = ({ entry, getAsset }) => {
  return (
    <ProjectsPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      main={entry.getIn(['data', 'main'])}
      projects={entry.getIn(['data', 'projects'])}
    />
  )
}

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectsPagePreview
