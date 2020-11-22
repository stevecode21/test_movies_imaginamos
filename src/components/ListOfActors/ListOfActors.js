import React from 'react';
import {Actor} from '../Actor/Actor';
import {ActorsList} from './ListOfActors.styles.';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
export const ListOfActors = () => {
  const {credits} = useSelector((state) => state.reduxMovies);
  return (
    <ActorsList
      data={credits}
      keyExtractor={(item, index) => {
        return item.id.toString();
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => {
        return <Actor actor={item} />;
      }}
    />
  );
};

// ListOfActors.propTypes = {
//   actors: PropTypes.array.isRequired,
// };
