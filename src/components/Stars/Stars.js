import React from 'react';
import {Container} from './Starts.styles';
import StarsMovie from 'react-native-stars';
import PropTypes from 'prop-types';
export const Stars = ({voteAverage}) => {
  const newAverage = voteAverage / 2;

  return (
    <Container>
      <StarsMovie
        display={newAverage}
        spacing={2}
        count={5}
        starSize={18}
        fullStar={require('../../assets/icons/rate-star-button-fill.png')}
        emptyStar={require('../../assets/icons/rate-star-button.png')}
      />
    </Container>
  );
};

Stars.propTypes = {
  voteAverage: PropTypes.number.isRequired,
};
