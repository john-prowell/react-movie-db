import React, { Component } from 'react';
import HeroImage from '../elements/HeroImage/HeroImage';
import Search from '../elements/Search/Search';
import MovieThumbs from '../elements/MovieThumbs/MovieThumbs';
import Spinner from '../elements/Spinner/Spinner';
import {
  API_URL,
  IMAGE_BASE_URL,
  IMAGE_BACKDROP_SIZE
} from '../../config/config';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './Home.css';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    total: null,
    current: 1,
    pageSize: 20,
    searchTerm: ''
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchMovies(endpoint);
  }

  onChange = page => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    this.setState({
      loading: true,
      current: page
    });

    this.fetchMovies(endpoint);
  };

  fetchMovies = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          heroImage: this.state.heroImage || result.results[0],
          movies: result.results,
          loading: false,
          total: result.total_pages
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const movies = this.state.movies;
    return (
      <React.Fragment>
        <div className="main">
          <div className="container">
            {/* {this.state.search ? (
                <h1>Search Results:</h1>
              ) : (
                <h1>Popular Movies</h1>
              )} */}
            {this.state.loading && <Spinner />}

            {movies.length === 0 ? null : <MovieThumbs movies={movies} />}
            <div className="pagination">
              <Pagination
                onChange={this.onChange}
                current={this.state.current}
                total={this.state.total}
                pageSize={this.state.pageSize}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
