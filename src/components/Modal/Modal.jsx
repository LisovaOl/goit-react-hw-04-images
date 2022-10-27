import { Component } from 'react';
import { createPortal } from 'react-dom'; // 8-modal подключить портал через метод из react-dom

// import PropTypes from 'prop-types';
import '../../index.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

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
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {this.props.children}
          <img
            src="https://pixabay.com/get/g32d0b3a115fbff8823764e55ba131db4abf320ace7e0c79e9a82edd76a8124253abe4c2c40bbf44ae55dcbf6b4285a9d5c600468a47791af2f8ae942014bff61_640.jpg"
            alt=""
          ></img>
        </div>
      </div>,
      modalRoot
    );
  }
}

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };

