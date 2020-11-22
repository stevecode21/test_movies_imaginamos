/**
 * Libraries
 */
import React from 'react';
/**
 * Styles
 */
import {
  Container,
  Greeting,
  ContainerTitle,
  ChangeTheme,
  Button,
} from './Greetings.styles';
/**
 * Components
 */
import {SearchingBar} from '../SearchingBar/SearchingBar';
/**
 * Redux
 */
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../store/actions/themes';
export const Greetings = () => {
  const {theme} = useSelector((state) => state.reduxThemes);
  const dispatch = useDispatch();
  const changeTheme = () => {
    let newTheme;
    if (theme === 'default') newTheme = 'light';
    else newTheme = 'default';
    dispatch(setTheme(newTheme));
  };
  return (
    <Container theme={theme}>
      <ContainerTitle>
        <Greeting theme={theme}>Hello, what do you want to watch ?</Greeting>
        <Button onPress={changeTheme} theme={theme}>
          <ChangeTheme theme={theme}>
            {theme === 'default' ? 'LightMode' : 'DarkMode'}
          </ChangeTheme>
        </Button>
      </ContainerTitle>
      <SearchingBar />
    </Container>
  );
};
