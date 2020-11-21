/**
 * Libraries
 */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
/**
 * Components
 */
import {Greetings} from '../../components/Greetings/Greetings';
import {MoviesView} from '../../components/MoviesView/MoviesView';
/**
 * Redux
 */
import {useDispatch} from 'react-redux';
import {getDiscoverMovies, getTopRatedMovies} from '../../store/actions/movies';
/**
 * Styles
 */
import {Container} from './Movies.styles';
import {defaultColors} from '../../constants/themes';
export const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscoverMovies());
    dispatch(getTopRatedMovies());
  });
  return (
    <>
      <StatusBar backgroundColor={defaultColors.primary} />
      <Container>
        <Greetings />
        <MoviesView />
      </Container>
    </>
  );
};
