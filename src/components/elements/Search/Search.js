import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search-content">
          <FontAwesomeIcon icon={faSearch} size="2x" className='search-icon' />
          <input type="text" className='search-input' placeholder="Enter movie title..." />
        </div>
      </div>
    );
  }
}

export default Search;
