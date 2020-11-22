import React from 'react';
import {Container, Subtitle, More} from './SubtitlesMoviesView.styles';
import PropTypes from 'prop-types';
export const SubtitlesMoviesView = ({subtitle}) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <More>See all</More>
    </Container>
  );
};

SubtitlesMoviesView.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
