import { useEffect } from 'react';

import { createPortal } from 'react-dom'; // 8-modal подключить портал через метод из react-dom

import PropTypes from 'prop-types';
import '../../index.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        {/* {children} */}
        <img src={largeImageURL} alt=""></img>
        {/* <button type="button" onClick={this.props.onClose}>
            Close
          </button> */}
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.handleBackdropClick}>
//         <div className="Modal">
//           {this.props.children}
//           <img src={this.props.largeImageURL} alt=""></img>
//           {/* <button type="button" onClick={this.props.onClose}>
//             Close
//           </button> */}
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
