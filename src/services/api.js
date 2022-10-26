import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30815916-ab82dc6f0d54ac4918d959108';
const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchGallery = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`
  );
  const galleryItems = {
    gallery: response.data.hits.map(img => {
      const { id, webformatURL, largeImageURL, tags } = img;
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }),
  };
  return galleryItems;
};
