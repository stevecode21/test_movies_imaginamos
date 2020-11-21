import React from 'react';
import {Container} from './MoviesView.styles';
/**
 * Components
 */
import {SubtitlesMoviesView} from '../SubtitlesMoviesView/SubtitlesMoviesView';
export const MoviesView = () => {
  return (
    <Container>
      <SubtitlesMoviesView subtitle="RECOMMENDED FOR YOU" />
    </Container>
  );
};
