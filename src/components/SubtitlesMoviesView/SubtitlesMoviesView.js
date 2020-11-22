import React from 'react';
import {Container, Subtitle, More} from './SubtitlesMoviesView.styles';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
export const SubtitlesMoviesView = ({subtitle}) => {
  const {theme} = useSelector((state) => state.reduxThemes);
  return (
    <Container>
      <Subtitle theme={theme}>{subtitle}</Subtitle>
      <More theme={theme}>See all</More>
    </Container>
  );
};

SubtitlesMoviesView.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
