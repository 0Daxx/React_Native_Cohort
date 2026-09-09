import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- BRAND COLORS (Static - Never Changes) ---
export const BRAND = {
  light: {
    primary: "#03ad4a",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    text: "#000000",
    textSecondary: "#666666",
    border: "#E0E0E0",
  },
  dark: {
    primary: "#009b41",
    background: "#121212",
    surface: "#1E1E1E",
    text: "#FFFFFF",
    textSecondary: "#A0A0A0",
    border: "#333333",
  }
};

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colors: typeof BRAND.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // STEP 1: Load saved theme when app starts
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem('@app_theme');
        if (saved === 'dark' || saved === 'light') {
          setIsDark(saved === 'dark');
        } else {
          // No saved preference? Use phone's system setting
          setIsDark(systemScheme === 'dark');
        }
      } catch (error) {
        console.log('Could not load theme', error);
        setIsDark(systemScheme === 'dark');
      } finally {
        setIsLoading(false);
      }
    };
    loadTheme();
  }, []);

  // STEP 2: Save theme whenever it changes
  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem('@app_theme', isDark ? 'dark' : 'light').catch(console.error);
    }
  }, [isDark, isLoading]);

  // STEP 3: Create stable colors object (only updates when isDark changes)
  const colors = useMemo(() => {
    return isDark ? BRAND.dark : BRAND.light;
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Prevent white flash while loading saved theme
  if (isLoading) return null;

  return React.createElement(
    ThemeContext.Provider,
    { value: { isDark, toggleTheme, colors } },
    children,
  );
};

// STEP 4: Safe hook with clear error message
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('❌ useTheme must be used inside <ThemeProvider>. Check App.tsx!');
  }
  return context;
};