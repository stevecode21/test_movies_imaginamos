import styled from 'styled-components/native';
import {defaultColors, getThemeColor} from '../../constants/themes';
export const Container = styled.View`
  flex: 3;
  background-color: ${(props) => getThemeColor('secondary', props.theme)};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 40px 0 0 0;
  /* justify-content: center;
  align-items: center; */
`;
