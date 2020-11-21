import React from 'react';
import {Greetings} from '../../components/Greetings/Greetings';
import {MoviesView} from '../../components/MoviesView/MoviesView';
import {Container} from './Movies.styles';
export const Movies = () => {
  return (
    <Container>
      <Greetings />
      <MoviesView />
    </Container>
  );
};
