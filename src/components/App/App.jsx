import React, { Component } from 'react';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from '../Button/button';
import '../../index.css';

import * as api from '../../services/api';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    error: null,
    loading: false,
    // showModal: false,
    largeImage: '',
  };
  componentDidUpdate(_, prevState) {
    // console.log('prevState.page:', prevState.page);
    // console.log('this.state.page:', this.state.page);

    // console.log('prevState.query:', prevState.query);
    // console.log('this.state.query:', this.state.query);

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImageGallery(this.state.query, this.state.page);
      // console.log('fatch');
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('Please, enter your request');
      return;
    }
    if (query === this.state.query) {
      toast.error('Please, enter something new');
      return;
    }
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
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  openModal = largeImageURL => {
    this.setState({ largeImage: largeImageURL });
    console.log(largeImageURL);
  };
  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    const { loading, gallery, largeImage } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        <ImageGallery galleryItems={gallery} onClick={this.openModal} />
        {largeImage && (
          <Modal onClose={this.closeModal} largeImageURL={largeImage} />
        )}

        {gallery.length >= 12 && <Button onClick={this.loadMore} />}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
