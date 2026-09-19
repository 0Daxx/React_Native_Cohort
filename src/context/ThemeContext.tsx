import React, { createContext, useContext, ReactNode } from 'react';
import { AppTheme, defaultTheme } from '@/theme/theme';
import { useAppTheme as useThemeHook } from '@/theme/useTheme';

interface ThemeContextType {
  theme: AppTheme;
  styles: ReturnType<typeof import('../theme/styles').createStyles>;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, styles, isDark } = useThemeHook();
  
  return (
    <ThemeContext.Provider value={{ theme, styles, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
