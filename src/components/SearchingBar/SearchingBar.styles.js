import styled from 'styled-components/native';
import {defaultColors, getThemeColor} from '../../constants/themes';

export const Container = styled.View`
  background-color: ${(props) => getThemeColor('searchingBar', props.theme)};
  border-radius: 20px;
  width: 289px;
  height: 30px;
  opacity: 0.4;
  margin-top: 10%;
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
`;

export const Search = styled.Text`
  color: ${(props) => getThemeColor('text', props.theme)};
  opacity: 0.6;
`;

export const Icon = styled.Image`
  width: 12px;
  height: 12px;
  margin-right: 5%;
`;
