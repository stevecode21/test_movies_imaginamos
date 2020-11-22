import React from 'react';
import {Container, Image, Name, ContainerImage} from './Actor.styles';
import PropTypes from 'prop-types';
import {ROUTES} from '../../constants/api';

export const Actor = ({actor}) => {
  return (
    <Container>
      <ContainerImage>
        {!actor.profile_path ? (
          <Name>?</Name>
        ) : (
          <Image
            source={{uri: `${ROUTES.IMAGES}${actor.profile_path}`}}
            resizeMode="cover"
          />
        )}
      </ContainerImage>
      <Name numberOfLines={2}>{actor.name}</Name>
    </Container>
  );
};

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
};
