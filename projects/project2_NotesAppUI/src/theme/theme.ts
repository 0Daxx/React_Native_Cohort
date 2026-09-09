// config.ts
import { useWindowDimensions } from 'react-native';

export const BRAND = {
  // Brand Green Theme
  primary: "#00C853",       // Main Green
  primaryDark: "#00E676",   // Lighter Green for Dark Mode contrast
  background: "#FFFFFF",
  backgroundDark: "#121212",
  surface: "#F5F5F5",
  surfaceDark: "#1E1E1E",
  text: "#000000",
  textDark: "#FFFFFF",
  textSecondary: "#666666",
  textSecondaryDark: "#A0A0A0",
  border: "#E0E0E0",
  borderDark: "#333333",
};

export const useScreenMetrics = () => {
  const { width, height, fontScale } = useWindowDimensions();
  return { width, height, fontScale, isTablet: width >= 768 };
};