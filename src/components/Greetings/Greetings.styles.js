import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${defaultColors.primary};
  padding-left: 50px;
`;

export const Greeting = styled.Text`
  text-align: center;
  font-size: 40px;
  text-align: left;
  color: ${defaultColors.titles};
`;
