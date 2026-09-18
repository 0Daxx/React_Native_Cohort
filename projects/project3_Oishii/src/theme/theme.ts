import { LightTheme, DarkTheme, ThemeColors } from './colors';

export interface AppTheme {
  colors: ThemeColors;
  isDark: boolean;
}

export const useAppTheme = (isDark: boolean): AppTheme => ({
  colors: isDark ? DarkTheme : LightTheme,
  isDark,
});

export const defaultTheme: AppTheme = {
  colors: LightTheme,
  isDark: false,
};

