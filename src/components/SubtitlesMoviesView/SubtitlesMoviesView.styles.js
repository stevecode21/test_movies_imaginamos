import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';

export const Container = styled.View`
  flex-direction: row;
  padding: 0 20px 10px 30px;
  /* background-color: red; */
  align-items: center;
`;

export const Subtitle = styled.Text`
  /* font-size: 18px; */
  color: ${defaultColors.titles};
`;
