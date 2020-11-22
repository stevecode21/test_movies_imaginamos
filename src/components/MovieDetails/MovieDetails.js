import React, {useEffect} from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerAdditionalDetails,
  Button,
  ContainerDescription,
  Description,
  Credits,
  AdditionalDetails,
  ContainerLastDetails,
  LastDetails,
  TextButton,
  HighDefition,
  LastDetailsText,
} from './MovieDetails.styles';
import PropTypes from 'prop-types';
import {ListOfActors} from '../ListOfActors/ListOfActors';
import {Stars} from '../Stars/Stars';
/**
 * Redux
 */
import {useSelector, useDispatch} from 'react-redux';
import {getCredits} from '../../store/actions/movies';
export const MovieDetails = ({movie}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCredits(movie.id));
  });
  return (
    <Container>
      <ContainerTitle>
        <Title>{movie.original_title}</Title>
        <HighDefition source={require('../../assets/icons/4k-fullhd.png')} />
      </ContainerTitle>
      <ContainerAdditionalDetails>
        <Button>
          <TextButton>WATCH NOW</TextButton>
        </Button>
        <Stars voteAverage={movie.vote_average} />
      </ContainerAdditionalDetails>
      <ContainerDescription>
        <Description>{movie.overview}</Description>
      </ContainerDescription>
      <Credits>
        <ListOfActors />
      </Credits>

      <AdditionalDetails>
        <ContainerLastDetails>
          <LastDetails>Studio</LastDetails>
        </ContainerLastDetails>
        <ContainerLastDetails>
          <LastDetails>Genre</LastDetails>
        </ContainerLastDetails>
        <ContainerLastDetails>
          <LastDetails>Release</LastDetails>
          <LastDetailsText>{movie.release_date}</LastDetailsText>
        </ContainerLastDetails>
      </AdditionalDetails>
    </Container>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
