import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
export class SearchBar extends Component {
  state = {
    input: '',
  };
    
  handleNameChange = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
  };
    
  handleSubmit = event => {
      event.preventDefault();
      if (this.state.input.trim() === '') {
          toast("OOOPPPSSS !");
          return; 
      }
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };
    
  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              //   autocomplete="off"
              //   autofocus
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
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default SearchBar;
