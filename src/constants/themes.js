export const defaultColors = {
  primary: '#5BA2D4',
  titles: '#FFFFFF',
  secondary: '#273646',
  gray: 'gray',
  buttons: '#707070',
  text: '#FFFFFF',
  searchingBar: '#FFFFFF',
  textButton: '#FFFFFF',
  buttonTheme: '#FFFFFF',
  textTheme: '#707070',
};

export const lightColors = {
  primary: '#F6F8E8',
  titles: '#000',
  secondary: '#FFFFFF',
  gray: 'gray',
  buttons: '#707070',
  text: '#000',
  searchingBar: '#000',
  textButton: '#FFFFFF',
  buttonTheme: '#5BA2D4',
  textTheme: '#FFFFFF',
};

export const themes = {
  default: {...defaultColors},
  light: {...lightColors},
};

export const getThemeColor = (color, theme = 'light') => {
  const themeColor = themes[theme][color];
  const fallbackColor = themes.default[color];
  return themeColor || fallbackColor;
};
