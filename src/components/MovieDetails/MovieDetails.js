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
  HighDefinition,
  LastDetailsText,
} from './MovieDetails.styles';
import PropTypes from 'prop-types';
import {ListOfActors} from '../ListOfActors/ListOfActors';
import {Stars} from '../Stars/Stars';
/**
 * Redux
 */
import {useDispatch, useSelector} from 'react-redux';
import {getCredits} from '../../store/actions/movies';

export const MovieDetails = ({movie}) => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.reduxThemes);

  useEffect(() => {
    dispatch(getCredits(movie.id));
  });
  return (
    <Container theme={theme}>
      <ContainerTitle>
        <Title theme={theme}>{movie.original_title}</Title>
        <HighDefinition source={require('../../assets/icons/4k-fullhd.png')} />
      </ContainerTitle>
      <ContainerAdditionalDetails>
        <Button theme={theme}>
          <TextButton theme={theme}>WATCH NOW</TextButton>
        </Button>
        <Stars voteAverage={movie.vote_average} />
      </ContainerAdditionalDetails>
      <ContainerDescription>
        <Description theme={theme}>{movie.overview}</Description>
      </ContainerDescription>
      <Credits>
        <ListOfActors />
      </Credits>

      <AdditionalDetails>
        <ContainerLastDetails>
          <LastDetails theme={theme}>Studio</LastDetails>
        </ContainerLastDetails>
        <ContainerLastDetails>
          <LastDetails theme={theme}>Genre</LastDetails>
        </ContainerLastDetails>
        <ContainerLastDetails>
          <LastDetails theme={theme}>Release</LastDetails>
          <LastDetailsText theme={theme}>{movie.release_date}</LastDetailsText>
        </ContainerLastDetails>
      </AdditionalDetails>
    </Container>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
