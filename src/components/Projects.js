import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import ImageViewer from "react-simple-image-viewer";

const Projects = ({ items, projects, preview }) => {
  console.log('projects', projects);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(() => {
    setCurrentImage(0);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  
  return (
    <div>
      <img src={preview} onClick={openImageViewer} alt="" />

      {isViewerOpen && (
        <ImageViewer
          src={items}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
};

Projects.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default Projects;
