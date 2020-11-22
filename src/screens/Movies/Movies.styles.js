import styled from 'styled-components/native';
import {defaultColors, getThemeColor} from '../../constants/themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => getThemeColor('primary', props.theme)};
`;
