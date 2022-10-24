import React, { Component } from 'react'

import axios from 'axios';
// import fetchImages from 'services/api';

// const API_KEY = '30815916-ab82dc6f0d54ac4918d959108';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class App extends Component {
  state = {
    imageGallery: null,
    loading: false,
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=dog&page=1&key=29502904-bb8b76f5b0eb667a79f07b05e&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(imageGallery => {
        this.setState({ imageGallery })
        console.log(imageGallery.hits)
      }
      )
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.loading && <p>loading...</p>}
        <ul>
          {this.state.imageGallery &&
            this.state.imageGallery.hits.map(hit => (
              <li key={hit.id}>
                <p>ID: {hit.id} TAG: {hit.tags}</p>
                <img src={hit.webformatURL} alt="dog" width="60px"></img>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

// export class App extends Component {
//   state = {
//     gallery: [],
//     loading: false,
//   }
//   componentDidMount() {
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=30815916-ab82dc6f0d54ac4918d959108&image_type=photo&orientation=horizontal&per_page=12'
//     )
//       .then(res => console.log(res.json()))
//       .then(value => console.log(value))

    
    // try {
    //   const responce = axios.get(
    //     'https://pixabay.com/api/?q=cat&page=1&key=30815916-ab82dc6f0d54ac4918d959108&image_type=photo&orientation=horizontal&per_page=12'
    //   );
    //   console.log(responce)
    // }
    // catch (error){}
// }
//   render() {
//     return <div>Finder Olena</div>;
//   }
// }

// export default App


// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY_API = '29502904-bb8b76f5b0eb667a79f07b05e';

// async function fetchImages(query, page, perPage) {
//   const response = await axios
//     .get(
//       `?key=${KEY_API}&q=${query}&per_page=${perPage}&page=${page}&image_type="photo"&orientation="horizontal"&safesearch=true`
//     )
//     .then(response => {
//       if (response.data.total === 0) {
//         Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       }
//       // console.log(response.data);
//       return response.data;
//     });

//   return response;
// }

// export default fetchImages;
