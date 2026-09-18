// src/theme/index.ts
import { useMemo } from 'react';
import { StyleSheet, Dimensions, useColorScheme } from 'react-native';

const { width } = Dimensions.get('window');

export const BRAND = {
  primary: "#F04F5F",
  secondary: "#1c1c1c",
  grey: "#7a7a7a",
  white: "#DDE9FF", // Your specific brand white
  green: "#00ad00",
};

// Light/Dark color maps
const LIGHT = {
  bg: "#FFFFFF", surface: "#F8F9FA", text: "#1A1A1A", 
  textSec: "#6B7280", border: "#E5E7EB", inputBg: "#F3F4F6"
};

const DARK = {
  bg: "#0F0F0F", surface: "#1A1A1A", text: "#F9FAFB", 
  textSec: "#9CA3AF", border: "#374151", inputBg: "#262626"
};

export const useAppTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const c = isDark ? DARK : LIGHT;

  return useMemo(() => ({
    isDark,
    colors: { ...BRAND, ...c },
    styles: StyleSheet.create({
      // Layout
      flex1: { flex: 1 },
      center: { justifyContent: 'center', alignItems: 'center' },
      row: { flexDirection: 'row' },
      
      // Screen Backgrounds
      container: { flex: 1, backgroundColor: c.bg },
      safeArea: { flex: 1, backgroundColor: c.bg },
      scrollContainer: { flex: 1 },
      // Typography
      h1: { fontSize: 32, fontWeight: 'bold', color: c.text },
      h2: { fontSize: 24, fontWeight: 'bold', color: c.text },
      body: { fontSize: 16, color: c.text },
      bodySec: { fontSize: 14, color: c.textSec },
      caption: { fontSize: 12, color: c.textSec },
      
      // Inputs & Forms
      inputContainer: { 
        flexDirection: 'row', alignItems: 'center', 
        backgroundColor: c.inputBg, borderRadius: 12, 
        borderWidth: 1, borderColor: c.border, paddingHorizontal: 16, height: 56 
      },
      inputText: { flex: 1, fontSize: 16, color: c.text, marginLeft: 8 },
      
      // Buttons
      btnPrimary: { 
        backgroundColor: BRAND.primary, height: 56, borderRadius: 12, 
        justifyContent: 'center', alignItems: 'center', marginTop: 16 
      },
      btnText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
      
      // Carousel & Onboarding
      carouselContainer: { height: width * 0.85, width: '100%' },
      dot: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: c.textSec + '40' },
      dotActive: { backgroundColor: BRAND.primary, width: 24 },
      
      // Misc
      divider: { height: 1, backgroundColor: c.border, marginVertical: 24 },
      card: { backgroundColor: c.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: c.border }
    })
  }), [isDark]);
};