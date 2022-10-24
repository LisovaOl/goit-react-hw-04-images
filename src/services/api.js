import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '30815916-ab82dc6f0d54ac4918d959108';

export default function fetchImages(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
