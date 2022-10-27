import React, { Component } from 'react';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal'
import '../../index.css'

import * as api from '../../services/api';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    error: null,
    loading: false,
    showModal: true,

    // currentLargeImage: '',
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImageGallery(this.state.query, this.state.page);
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
    // console.log(query);
    this.setState({ query, page: 1, gallery: [] });
  };

  fetchImageGallery = async (query, page) => {
    try {
      this.setState({ loading: true });
      const gallery = await (await api.fetchGallery(query, page)).gallery;
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...gallery],
        loading: false,
      }));
      if (gallery.length === 0) {
        toast.error('Nothing found for your request. Please, try again', {
          theme: 'colored',
        });
      }
    } catch (error) {
      this.setState({ error: 'Something went wrong, please, try again' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
        const { loading, gallery, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        <ImageGallery galleryItems={gallery} />
        {showModal && (<Modal />)}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
