import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css';

export class SearchBar extends Component {
  state = {
    inputQuery: '',
  };

  handleNameChange = event => {
    this.setState({ inputQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputQuery.trim() === '') {
      toast.warn('Please fill in the search field', { theme: 'colored' });
      return;
    }
    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
            />
            <button type="submit" className="SearchForm-button">
              {/* <span className="SearchForm-button-label"> */}
              <FcSearch />
              {/* </span> */}
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default SearchBar;
