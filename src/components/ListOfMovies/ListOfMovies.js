/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {Movie} from '../Movie/Movie';
import {MoviesList} from './ListOfMovies.styles';
import PropTypes from 'prop-types';
export const ListOfMovies = ({movies}) => {
  console.log('movieees', movies);
  return (
    <MoviesList
      data={movies}
      keyExtractor={(item, index) => {
        return item.id.toString();
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => {
        return <Movie movie={item} />;
      }}
      contentContainerStyle={{paddingLeft: 20}}
    />
  );
};

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
