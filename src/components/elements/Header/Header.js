import React from 'react';
import Search from '../Search/Search';
import './Header.css';

class Header extends React.Component {
  state = {
    menuOpen: false,
    width: document.documentElement.clientWidth
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <img
            src="/images/movie-db-logo.svg"
            alt=""
            className="movie-info-logo"
          />
          <Search />
          <img
            src="/images/powered-by-the-movie-db.svg"
            alt=""
            className="movie-db-logo"
          />
        </div>
      </header>
    );
  }
}
export default Header;
