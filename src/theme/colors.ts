
import { Platform } from 'react-native';

export const BrandColors = {
  primary: "#F04F5F",
  secondary: "#1c1c1c",
  grey: "#7a7a7a",
  white: "#DDE9FF",
  green: "#00ad00",
};

// Light Theme Colors
export const LightTheme = {
  // Brand colors
  primary: BrandColors.primary,
  secondary: BrandColors.secondary,
  grey: BrandColors.grey,
  white: BrandColors.white,
  green: BrandColors.green,
  
  // Background colors
  background: "#FFFFFF",
  backgroundSecondary: "#F8F9FA",
  backgroundTertiary: "#F0F2F5",
  
  // Text colors
  text: "#1A1A1A",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",
  textInverse: "#FFFFFF",
  
  // Border colors
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  
  // Status colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  
  // Shadow/Overlay
  shadow: "rgba(0, 0, 0, 0.1)",
  overlay: "rgba(0, 0, 0, 0.5)",
  
  // Card/Surface
  card: "#FFFFFF",
  cardBorder: "#E5E7EB",
};

// Dark Theme Colors
export const DarkTheme = {
  // Brand colors (adjusted for dark mode)
  primary: BrandColors.primary,
  secondary: "#E5E5E5",
  grey: "#9CA3AF",
  white: "#F0F4FF",
  green: "#34D399",
  
  // Background colors
  background: "#0F0F0F",
  backgroundSecondary: "#1A1A1A",
  backgroundTertiary: "#262626",
  
  // Text colors
  text: "#F9FAFB",
  textSecondary: "#D1D5DB",
  textTertiary: "#9CA3AF",
  textInverse: "#0F0F0F",
  
  // Border colors
  border: "#374151",
  borderLight: "#4B5563",
  
  // Status colors
  success: "#34D399",
  warning: "#FBBF24",
  error: "#F87171",
  info: "#60A5FA",
  
  // Shadow/Overlay
  shadow: "rgba(0, 0, 0, 0.3)",
  overlay: "rgba(0, 0, 0, 0.7)",
  
  // Card/Surface
  card: "#1A1A1A",
  cardBorder: "#374151",
};

export type ThemeColors = typeof LightTheme;
