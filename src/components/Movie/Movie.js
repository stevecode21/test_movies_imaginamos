/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {ContainerImage, Image, Name, Container, Touch} from './Movie.styles';
import {ROUTES} from '../../constants/api';
import {LoggedRoutes} from '../../navigation/routes/LoggedRoutes';
import PropTypes from 'prop-types';
export const Movie = ({movie, navigation}) => {
  return (
    <Container>
      <Touch
        onPress={() => {
          navigation.navigate(LoggedRoutes.MOVIE_DETAIL, {
            movie: movie,
          });
        }}>
        <ContainerImage>
          <Image
            source={{uri: `${ROUTES.IMAGES}${movie.poster_path}`}}
            resizeMode="cover"
          />
        </ContainerImage>
      </Touch>
      <Name>{movie.original_title}</Name>
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
