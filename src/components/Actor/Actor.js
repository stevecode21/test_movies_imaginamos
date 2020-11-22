import React from 'react';
import {Container, Image, Name, ContainerImage} from './Actor.styles';
import PropTypes from 'prop-types';
import {ROUTES} from '../../constants/api';
import {useSelector} from 'react-redux';
export const Actor = ({actor}) => {
  const {theme} = useSelector((state) => state.reduxThemes);

  return (
    <Container>
      <ContainerImage theme={theme}>
        {!actor.profile_path ? (
          <Name theme={theme}>?</Name>
        ) : (
          <Image
            source={{uri: `${ROUTES.IMAGES}${actor.profile_path}`}}
            resizeMode="cover"
          />
        )}
      </ContainerImage>
      <Name numberOfLines={2} theme={theme}>
        {actor.name}
      </Name>
    </Container>
  );
};

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
};
