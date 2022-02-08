/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import ImageViewer from "react-simple-image-viewer";

const preview = "https://placeimg.com/240/200/nature";
const items = [
  "https://placeimg.com/1200/800/nature",
  "https://placeimg.com/800/1200/nature",
  "https://placeimg.com/1920/1080/nature",
  "https://placeimg.com/1500/500/nature"
];

const Projects = ({ projects }) => {
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
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
      text: PropTypes.string
    })
  ),
};

export default Projects;
