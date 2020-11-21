import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';
export const Container = styled.View`
  margin: 0 10px 0 10px;
  /* background-color: red; */
  width: 130px;
`;
export const ContainerImage = styled.View`
  width: 130px;
  height: 170px;
  background-color: ${defaultColors.gray};
  border-radius: 20px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  flex: 1;
`;

export const Name = styled.Text`
  color: ${defaultColors.titles};
  margin: 10px 0 0 0;
`;

export const Touch = styled.TouchableOpacity`
  background-color: transparent;
`;
