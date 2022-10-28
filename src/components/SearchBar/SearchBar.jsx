import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css';

export class SearchBar extends Component {
  state = {
    inputQuery: '',
  };

  handleNameChange = event => {
    this.setState({ inputQuery: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form
            className="SearchForm"
            onSubmit={event => {
              event.preventDefault();
              this.props.onSubmit(this.state.inputQuery);
              event.target.reset(); //очистка поля введення
            }}
          >
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
