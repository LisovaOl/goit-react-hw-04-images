import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {galleryItems.map(galleryItem => {
          return (
            <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />

          );
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  // onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
