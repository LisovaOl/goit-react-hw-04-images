import React, { Component } from 'react';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../SearchBar/SearchBar';
import * as api from '../../services/api';


export default class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    error: null,
    loading: false,
    currentLargeImage: '',
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
    console.log(query);
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
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery galleryItems={this.state.gallery} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

