import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${defaultColors.primary};
  padding-left: 60px;
  padding-right: 100px;
`;

export const Greeting = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  text-align: left;
  color: ${defaultColors.titles};
  line-height: 40px;
`;
