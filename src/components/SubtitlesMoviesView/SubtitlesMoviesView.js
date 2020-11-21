import React from 'react';
import {Container, Subtitle} from './SubtitlesMoviesView.styles';
import PropTypes from 'prop-types';
export const SubtitlesMoviesView = ({subtitle}) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

SubtitlesMoviesView.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
