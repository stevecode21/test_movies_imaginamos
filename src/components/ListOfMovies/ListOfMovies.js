import React from 'react';
import {Movie} from '../Movie/Movie';
import {MoviesList} from './ListOfMovies.styles';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
export const ListOfMovies = ({movies}) => {
  const navigation = useNavigation();
  return (
    <MoviesList
      data={movies}
      keyExtractor={(item, index) => {
        return item.id.toString();
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => {
        return <Movie movie={item} navigation={navigation} />;
      }}
      contentContainerStyle={{paddingLeft: 20}}
    />
  );
};

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
