/**
 * Libraries
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Styles
 */
import {ContainerImage, Image, Name, Container, Touch} from './Movie.styles';
/**
 * Components
 */
import {Stars} from '../Stars/Stars';
/**
 * Constants
 */
import {ROUTES} from '../../constants/api';
import {LoggedRoutes} from '../../navigation/routes/LoggedRoutes';
import {useSelector} from 'react-redux';
export const Movie = ({movie, navigation}) => {
  const {theme} = useSelector((state) => state.reduxThemes);
  return (
    <Container>
      <Touch
        onPress={() => {
          navigation.navigate(LoggedRoutes.MOVIE_DETAIL, {
            movie: movie,
          });
        }}>
        <ContainerImage theme={theme}>
          <Image
            source={{uri: `${ROUTES.IMAGES}${movie.poster_path}`}}
            resizeMode="cover"
          />
        </ContainerImage>
      </Touch>
      <Name theme={theme} numberOfLines={1}>
        {movie.original_title}
      </Name>
      <Stars voteAverage={movie.vote_average} />
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
