import React from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerDescription,
  Description,
  Credits,
  AdditionalDetails,
  Studio,
  Genre,
  Release,
} from './MovieDetails.styles';
import PropTypes from 'prop-types';
export const MovieDetails = ({movie}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{movie.original_title}</Title>
      </ContainerTitle>
      <ContainerDescription>
        <Description>{movie.overview}</Description>
      </ContainerDescription>
      <Credits></Credits>

      <AdditionalDetails>
        <Studio></Studio>
        <Genre></Genre>
        <Release></Release>
      </AdditionalDetails>
    </Container>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
