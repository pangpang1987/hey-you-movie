import React from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

import { Heading, SearchSection, SearchBar, MovieListSection } from './styled';
import MovieDisplay from './components/MovieDisplay';
import Container from '../../components/Container';

export default class HomePageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.searchMovies = debounce(this.searchMovies, 300);
    // this.handleKeywordChange = debounce(this.handleKeywordChange, 300);
  }

  handleKeywordChange = event => {
    const value = event.target.value;

    this.setState(
      {
        keyword: value
      },
      () => this.searchMovies()
    );
  };

  searchMovies = () => {
    this.props.actions.searchMovies(this.state.keyword);
  };

  render() {
    const { movies } = this.props;
    const { keyword } = this.state;

    console.log(movies);

    return (
      <div>
        <SearchSection isListDisplay={keyword.length > 0}>
          <Heading>
            <i className="fa fa-home" aria-hidden="true" /> Movie Search
          </Heading>
          <SearchBar value={this.state.keyword} onChange={this.handleKeywordChange} />
        </SearchSection>
        <Container>
          <MovieListSection>
            {movies.map(movie => <MovieDisplay key={movie.id} movie={movie} />)}
          </MovieListSection>
        </Container>

      </div>
    );
  }
}

HomePageView.propTypes = {};
