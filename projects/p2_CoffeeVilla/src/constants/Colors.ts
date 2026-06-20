import { Appearance } from 'react-native';

export const BrandColors = {
  primary: "#F04F5F",
  secondary: "#1c1c1c",
  grey: "#7a7a7a",
  white: "#DDE9FF",
  green: "#00ad00",
};

export const LightTheme = {
  background: '#FFFFFF',
  surface: '#F8F9FA',
  text: '#1C1C1C',
  textMuted: '#7A7A7A',
  border: '#EAEAEA',
  ...BrandColors
};

export const DarkTheme = {
  background: '#121212',
  surface: '#1C1C1C',
  text: '#DDE9FF',
  textMuted: '#A0A0A0',
  border: '#2A2A2A',
  ...BrandColors
};