import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';

export const Container = styled.View`
  flex-direction: row;
  padding: 0 30px 20px 30px;
`;

export const Subtitle = styled.Text`
  /* font-size: 18px; */
  color: ${defaultColors.titles};
`;
