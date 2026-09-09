/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import {useColorScheme}

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  return Colors[theme];
}