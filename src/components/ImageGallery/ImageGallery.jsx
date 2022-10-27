import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <div >
      <ul className="ImageGallery">
        {galleryItems.map(galleryItem => {
          return (
            <li key={galleryItem.id} className="ImageGalleryItem">
              <img
                className="ImageGalleryItem-image"
                src={galleryItem.webformatURL}
                alt={galleryItem.tags}
              ></img>
            </li>

            // <ImageGalleryItem
            //   key={galleryItem.id}
            //   galleryItem={galleryItem}
            // />
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

