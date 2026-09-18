import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { getTheme, AppTheme } from './theme';
import { createStyles } from './styles';

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const theme = useMemo<AppTheme>(() => getTheme(isDark), [isDark]);
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return {
    theme,
    styles,
    isDark,
  };
};