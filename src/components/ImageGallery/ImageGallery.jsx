import React from 'react';
import PropTypes from 'prop-types';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <ul >
      {galleryItems.map(galleryItem => {
        return (
          <li key={galleryItem.id}>
            <p>
              ID: {galleryItem.id} TAG: {galleryItem.tags}
            </p>
            <img src={galleryItem.webformatURL} alt="dog" width="60px"></img>
          </li>

          // <ImageGalleryItem
          //   key={galleryItem.id}
          //   galleryItem={galleryItem}
          // />
        );
      })}
    </ul>
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

// import React, { Component } from 'react';
// // import axios from 'axios';

// export class ImageGallery extends Component {
//   state = {
//     imageGallery: null,
//     loading: false,
//   };
//   // componentDidMount() {
//   //   fetch(
//   //     'https://pixabay.com/api/?q=dog&page=1&key=29502904-bb8b76f5b0eb667a79f07b05e&image_type=photo&orientation=horizontal&per_page=12'
//   //   )
//   //     .then(res => res.json())
//   //     .then(imageGallery => {
//   //       this.setState({ imageGallery });
//   //       console.log(imageGallery.hits)
//   //     })
//   //     .finally(() => this.setState({ loading: false }));
//   // }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.imageGallery &&
//             this.state.imageGallery.hits.map(hit => (
//               <li key={hit.id}>
//                 <p>
//                   ID: {hit.id} TAG: {hit.tags}
//                 </p>
//                 <img src={hit.webformatURL} alt="dog" width="60px"></img>
//               </li>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ImageGallery;
