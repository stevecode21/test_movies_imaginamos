import React from 'react';
import {Container, Image} from './Movie.styles';
import {ROUTES} from '../../constants/api';
import PropTypes from 'prop-types';
export const Movie = ({movie}) => {
  return (
    <Container>
      <Image
        source={{uri: `${ROUTES.IMAGES}${movie.poster_path}`}}
        resizeMode="cover"
      />
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
