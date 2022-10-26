import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
            />
            <button type="submit" className="button">
              <span className="button-label">
                <FcSearch style={{ marginRight: 5, marginLeft: 5 }} /> Search{' '}
              </span>
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default SearchBar;
