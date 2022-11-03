import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from '../Button/button';
import '../../index.css';

import fetchGallery from '../../services/api';
// rfc

export default function App() {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [gallery, setGallery] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [largeImage, setLargeImage] = useState('')

useEffect(()=>{
  if (!query) {
    return;
  }
  setLoading(true);
  async function fetchImageGallery (){

    try { 
      const responce = await fetchGallery(query, page);
      setGallery(prevGallery => [...prevGallery, ...responce.gallery]);
      setLoading(false);

      // this.setState({ loading: true });
      // const gallery = await (await api.fetchGallery(query, page)).gallery;
      // this.setState(prevState => ({
      //   gallery: [...prevState.gallery, ...gallery],
      //   loading: false,
      // }));
      if (responce.gallery.length === 0) {
        toast.error('Nothing found for your request. Please, try again', {
          theme: 'colored',
        });
      }
    } catch (error) {
      setError('Something went wrong, please, try again')
      // this.setState({ error: 'Something went wrong, please, try again' });
    } finally {
      setLoading(false)
      // this.setState({ loading: false });
    }
  };
  fetchImageGallery ();

},[page, query])

  const handleFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('Please, enter your request');
      return;
    }
    // if (query === query) {
    //   toast.error('Please, enter something new');
    //   return;
    // }
    console.log(query);
    // this.setState({ query, page: 1, gallery: [] });
    setQuery(query);
    setPage(1);
    setGallery([])
  };


 const loadMore = () => {
    setPage(prevPage => (prevPage + 1 ));
  };
  const openModal = largeImageURL => {
    setLargeImage(largeImageURL);
    console.log(largeImageURL);
  };
  const closeModal = () => {
    setLargeImage('');
  };

  return (
    <div>
      {/* <button type="button" onClick={this.toggleModal}>
        Open Modal
      </button> */}
      <Searchbar onSubmit={handleFormSubmit} />
      {error && <p>{error}</p>}
      {loading && <Loader />}
      <ImageGallery galleryItems={gallery} onClick={openModal} />
      {largeImage && (
        <Modal onClose={closeModal} largeImageURL={largeImage} />
      )}

      {gallery.length >= 12 && <Button onClick={loadMore} />}

      <ToastContainer autoClose={3000} />
    </div>
  );
}

// export default class App extends Component {
  // state = {
  //   page: 1,
  //   query: '',
  //   gallery: [],
  //   error: null,
  //   loading: false,
  //   // showModal: false,
  //   largeImage: '',
  // };
  // componentDidUpdate(_, prevState) {
  //   // console.log('prevState.page:', prevState.page);
  //   // console.log('this.state.page:', this.state.page);

  //   // console.log('prevState.query:', prevState.query);
  //   // console.log('this.state.query:', this.state.query);

  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.query !== this.state.query
  //   ) {
  //     this.fetchImageGallery(this.state.query, this.state.page);
  //     // console.log('fatch');
  //   }
  // }

  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  // handleFormSubmit = query => {
  //   if (query.trim() === '') {
  //     toast.error('Please, enter your request');
  //     return;
  //   }
  //   if (query === this.state.query) {
  //     toast.error('Please, enter something new');
  //     return;
  //   }
  //   console.log(query);
  //   this.setState({ query, page: 1, gallery: [] });
  // };

  // fetchImageGallery = async (query, page) => {
  //   try {
  //     this.setState({ loading: true });
  //     const gallery = await (await api.fetchGallery(query, page)).gallery;
  //     this.setState(prevState => ({
  //       gallery: [...prevState.gallery, ...gallery],
  //       loading: false,
  //     }));
  //     if (gallery.length === 0) {
  //       toast.error('Nothing found for your request. Please, try again', {
  //         theme: 'colored',
  //       });
  //     }
  //   } catch (error) {
  //     this.setState({ error: 'Something went wrong, please, try again' });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  // openModal = largeImageURL => {
  //   this.setState({ largeImage: largeImageURL });
  //   console.log(largeImageURL);
  // };
  // closeModal = () => {
  //   this.setState({ largeImage: '' });
  // };

  // render() {
  //   const { loading, gallery, largeImage, error } = this.state;

  //   return (
  //     <div>
  //       {/* <button type="button" onClick={this.toggleModal}>
  //         Open Modal
  //       </button> */}
  //       <Searchbar onSubmit={this.handleFormSubmit} />
  //       {error && <p>{error}</p>}
  //       {loading && <Loader />}
  //       <ImageGallery galleryItems={gallery} onClick={this.openModal} />
  //       {largeImage && (
  //         <Modal onClose={this.closeModal} largeImageURL={largeImage} />
  //       )}

  //       {gallery.length >= 12 && <Button onClick={this.loadMore} />}

  //       <ToastContainer autoClose={3000} />
  //     </div>
  //   );
  // }
// }
