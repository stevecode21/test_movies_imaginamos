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
import {useDispatch, useSelector} from 'react-redux';
import {getDiscoverMovies, getTopRatedMovies} from '../../store/actions/movies';
/**
 * Styles
 */
import {Container} from './Movies.styles';
import {defaultColors, getThemeColor} from '../../constants/themes';
export const Movies = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.reduxThemes);

  useEffect(() => {
    dispatch(getDiscoverMovies());
    dispatch(getTopRatedMovies());
  });
  return (
    <>
      <StatusBar
        backgroundColor={getThemeColor('primary', theme)}
        barStyle={theme === 'default' ? 'light-content' : 'dark-content'}
      />
      <Container theme={theme}>
        <Greetings />
        <MoviesView />
      </Container>
    </>
  );
};
