import React from 'react';
import {Container, Image} from './CoverMovieDetails.styles';
import PropTypes from 'prop-types';
import {ROUTES} from '../../constants/api';
export const CoverMovieDetails = ({cover}) => {
  console.log(`${ROUTES.IMAGES}${cover}`);
  return (
    <Container>
      <Image source={{uri: `${ROUTES.IMAGES}${cover}`}} resizeMode="cover" />
    </Container>
  );
};

CoverMovieDetails.propTypes = {
  cover: PropTypes.string.isRequired,
};
