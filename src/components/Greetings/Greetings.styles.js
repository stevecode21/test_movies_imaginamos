import styled from 'styled-components/native';
import {defaultColors, getThemeColor} from '../../constants/themes';
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => getThemeColor('primary', props.theme)};
  padding-left: 60px;
  padding-right: 100px;
`;

export const Greeting = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => getThemeColor('titles', props.theme)};
  line-height: 40px;
`;

export const ChangeTheme = styled.Text`
  color: ${(props) => getThemeColor('textTheme', props.theme)};
`;
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => getThemeColor('buttonTheme', props.theme)};
  padding: 4%;
  border-radius: 20px;
`;
export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
