import styled from 'styled-components/native';
import {defaultColors} from '../../constants/themes';

export const Container = styled.View`
  background-color: ${defaultColors.secondary};
  flex: 2;
  padding: 20px 20px 0 30px;
`;

export const ContainerTitle = styled.View`
  /* background-color: red; */
  flex-direction: row;
`;
export const Title = styled.Text`
  color: ${defaultColors.titles};
  font-size: 24px;
  flex: 1;
`;
export const HighDefition = styled.Image`
  width: 20px;
  align-self: flex-end;
`;
export const ContainerAdditionalDetails = styled.View`
  /* background-color: red; */
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${defaultColors.buttons};
  width: 115px;
  height: 33px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  color: ${defaultColors.titles};
`;
export const ContainerDescription = styled.View``;
export const Description = styled.Text`
  font-size: 13px;
  line-height: 24px;
  color: ${defaultColors.text};
  opacity: 0.7;
`;
export const Credits = styled.View`
  /* background-color: green; */
`;
export const AdditionalDetails = styled.View`
  /* background-color: red; */
  justify-content: space-evenly;
`;
export const ContainerLastDetails = styled.View`
  flex-direction: row;
  margin: 5px 0 0 0;
`;
export const LastDetails = styled.Text`
  color: ${defaultColors.text};
  font-size: 13px;
  flex: 1;
`;
export const LastDetailsText = styled.Text`
  color: ${defaultColors.text};
  opacity: 0.7;
  font-size: 13px;
  flex: 4;
`;
