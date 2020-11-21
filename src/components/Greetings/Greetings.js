/**
 * Libraries
 */
import React from 'react';
/**
 * Styles
 */
import {Container, Greeting} from './Greetings.styles';
/**
 * Components
 */
import {SearchingBar} from '../SearchingBar/SearchingBar';
export const Greetings = () => {
  return (
    <Container>
      <Greeting>Hello, what do you want to watch ?</Greeting>
      <SearchingBar />
    </Container>
  );
};
