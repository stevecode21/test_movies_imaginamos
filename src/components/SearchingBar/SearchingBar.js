import React from 'react';

import {Container, Search, Icon} from './SearchingBar.styles';
import {useSelector} from 'react-redux';
export const SearchingBar = () => {
  const {theme} = useSelector((state) => state.reduxThemes);
  return (
    <Container theme={theme}>
      <Icon source={require('../../assets/icons/search.png')} />
      <Search theme={theme}>Search</Search>
    </Container>
  );
};
