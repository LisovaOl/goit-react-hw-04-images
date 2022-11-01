import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
import '../../index.css';

export default function SearchBar({ onSubmit }) {
  
  const [inputQuery, setInputQuery] = useState('');

  const handleNameChange = event => {
    setInputQuery(event.currentTarget.value.toLowerCase());
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit(inputQuery);
    event.target.reset(); //очистка поля введення
  };

  return (
    <div>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmitForm}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleNameChange}
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

SearchBar.propTypes = {
  inputQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};

// export class SearchBar extends Component {
//   state = {
//     inputQuery: '',
//   };

//   handleNameChange = event => {
//     this.setState({ inputQuery: event.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <div>
//         <header className="Searchbar">
//           <form
//             className="SearchForm"
//             onSubmit={event => {
//               event.preventDefault();
//               this.props.onSubmit(this.state.inputQuery);
//               event.target.reset(); //очистка поля введення
//             }}
//           >
//             <input
//               className="SearchForm-input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               onChange={this.handleNameChange}
//             />
//             <button type="submit" className="SearchForm-button">
//               {/* <span className="SearchForm-button-label"> */}
//               <FcSearch />
//               {/* </span> */}
//             </button>
//           </form>
//         </header>
//       </div>
//     );
//   }
// }

// export default SearchBar;
