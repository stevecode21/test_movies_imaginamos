import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';

export const Container = styled.View`
  width: 130px;
  height: 170px;
  background-color: ${defaultColors.gray};
  border-radius: 20px;
  margin: 0 10px 0 10px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  flex: 1;
`;
