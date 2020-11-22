import styled from 'styled-components/native';
import {defaultColors, getThemeColor} from '../../constants/themes';

export const Container = styled.View`
  flex-direction: row;
  padding: 0 30px 10px 30px;
  /* background-color: red; */
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Subtitle = styled.Text`
  /* font-size: 18px; */
  color: ${(props) => getThemeColor('titles', props.theme)};
`;

export const More = styled.Text`
  color: ${(props) => getThemeColor('text', props.theme)};
  opacity: 0.7;
`;
