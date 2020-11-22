import React from 'react';
import {Container, Image, Back} from './Header.styles';
import {useNavigation} from '@react-navigation/native';
export const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Back onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/left-arrow.png')} />
      </Back>
      <Image source={require('../../assets/icons/heart.png')} />
    </Container>
  );
};
