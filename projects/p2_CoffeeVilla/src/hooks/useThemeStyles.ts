import { useWindowDimensions, useColorScheme } from 'react-native';
import { LightTheme, DarkTheme } from '../constants/Colors';

export const useThemeStyles = () => {
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme();
  
  const isDark = colorScheme === 'dark';
  const theme = isDark ? DarkTheme : LightTheme;

  // Responsive scale factors based on a standard mobile baseline (375px width)
  const scale = (size: number) => (width / 375) * size;

  return {
    theme,
    isDark,
    width,
    height,
    scale,
    // Pre-calculated global semantic styles
    globalStyles: {
      container: {
        flex: 1,
        backgroundColor: theme.background,
        padding: scale(16),
      },
      title: {
        fontSize: scale(24),
        fontWeight: 'bold' as const,
        color: theme.text,
        marginBottom: scale(8),
      },
      body: {
        fontSize: scale(14),
        color: theme.textMuted,
      },
      button: {
        backgroundColor: theme.primary,
        paddingVertical: scale(12),
        paddingHorizontal: scale(24),
        borderRadius: scale(8),
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: scale(16),
        fontWeight: '600' as const,
      }
    }
  };
};