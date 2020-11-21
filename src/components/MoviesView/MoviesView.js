import React from 'react';
import {Container} from './MoviesView.styles';
/**
 * Components
 */
import {SubtitlesMoviesView} from '../SubtitlesMoviesView/SubtitlesMoviesView';
import {ListOfMovies} from '../ListOfMovies/ListOfMovies';
/**
 * Redux
 */
import {useSelector} from 'react-redux';
export const MoviesView = () => {
  const {movies} = useSelector((state) => state.reduxMovies);
  return (
    <Container>
      <SubtitlesMoviesView subtitle="RECOMMENDED FOR YOU" />
      <ListOfMovies movies={movies} />
    </Container>
  );
};
