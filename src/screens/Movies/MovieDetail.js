/* eslint-disable react/prop-types */
import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {CoverMovieDetails} from '../../components/CoverMovieDetails/CoverMovieDetails';
import {MovieDetails} from '../../components/MovieDetails/MovieDetails';
export const MovieDetail = ({route}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <CoverMovieDetails cover={route.params.movie.backdrop_path} />
      <MovieDetails movie={route.params.movie} />
    </>
  );
};

MovieDetail.propType = {
  route: PropTypes.object.isRequired,
};
