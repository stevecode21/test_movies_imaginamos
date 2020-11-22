import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';

export const Container = styled.View`
  /* background-color: red; */
  margin: 30px 30px 0 0;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  /* padding-left: 10px;
  padding-right: 10px; */
`;
export const ContainerImage = styled.View`
  background-color: ${defaultColors.gray};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  width: 100%;
  flex: 1;
`;

export const Name = styled.Text`
  text-align: center;
  color: ${defaultColors.titles};
`;
