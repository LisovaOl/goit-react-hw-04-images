import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.closeModal();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt=""></img>
        </div>
      </div>
    );
  }
}
