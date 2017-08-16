import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import MovieDescription from './MovieDescription';

const MovieContainer = styled.div`
  position: relative;
  padding: 0 9px 18px 9px;
  flex-basis: 25%;
  max-width: 25%;
`;

const Movie = styled.div`
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MovieImage = styled.img`width: 100%;`;

const MovieTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MovieTitle = styled.h3`
  color: #0098c0;
  font-size: 16px;
`;
const MovieTime = styled.span`
  color: #0f0f0f;
  font-size: 14px;
`;

const MovieDisplay = ({ movie }) => {
  const { title, poster_path, overview, id, release_date, backdrop_path } = movie;
  const bg = `https://image.tmdb.org/t/p/w300${backdrop_path}`;
  return (
    <MovieContainer>
      <Movie>
        {backdrop_path && <MovieImage src={bg} alt={title} />}
        <MovieInfo>
          <MovieTitleSection>
            <MovieTitle>
              {title}
            </MovieTitle>
            <MovieTime>
              {release_date}
            </MovieTime>
          </MovieTitleSection>
          <MovieDescription height={120} description={overview} />

        </MovieInfo>
      </Movie>
    </MovieContainer>
  );
};

MovieDisplay.propTypes = {};

export default MovieDisplay;
