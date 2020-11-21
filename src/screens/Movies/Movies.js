/**
 * Libraries
 */
import React, {useEffect} from 'react';
/**
 * Components
 */
import {Greetings} from '../../components/Greetings/Greetings';
import {MoviesView} from '../../components/MoviesView/MoviesView';
/**
 * Redux
 */
import {useDispatch} from 'react-redux';
import {getDiscoverMovies} from '../../store/actions/movies';
/**
 * Styles
 */
import {Container} from './Movies.styles';
export const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscoverMovies());
  });
  return (
    <Container>
      <Greetings />
      <MoviesView />
    </Container>
  );
};
