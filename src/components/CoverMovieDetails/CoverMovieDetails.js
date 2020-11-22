import React from 'react';
import {Container, Image} from './CoverMovieDetails.styles';
import PropTypes from 'prop-types';
import {ROUTES} from '../../constants/api';
import {Header} from '../../utils/Header/Header';
export const CoverMovieDetails = ({cover}) => {
  return (
    <Container>
      <Image source={{uri: `${ROUTES.IMAGES}${cover}`}} resizeMode="cover" />
      <Header />
    </Container>
  );
};

CoverMovieDetails.propTypes = {
  cover: PropTypes.string.isRequired,
};
