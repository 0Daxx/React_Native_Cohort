import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
  Pressable,
  StatusBar,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

// --- Brand Configuration ---
const BRAND = {
  primary: "#6366f1",
  background: "#ffffff",
  backgroundDark: "#0f172a",
  surface: "#f8fafc",
  surfaceDark: "#1e293b",
  text: "#0f172a",
  textDark: "#f8fafc",
  textSecondary: "#64748b",
  textSecondaryDark: "#94a3b8",
};

// --- Dynamic Style Factory ---
const getStyles = (width: number, fontScale: number, isDark: boolean) => {
  const theme = isDark ? BRAND.backgroundDark : BRAND.background;
  const surface = isDark ? BRAND.surfaceDark : BRAND.surface;
  const text = isDark ? BRAND.textDark : BRAND.text;
  const textSec = isDark ? BRAND.textSecondaryDark : BRAND.textSecondary;
  
  const isTablet = width >= 768;
  const baseFont = 16 * fontScale;
  const padding = isTablet ? 40 : 20;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme,
      alignItems: "center",
      justifyContent: "center",
      padding: padding,
    },
    card: {
      width: isTablet ? 500 : width - (padding * 2),
      backgroundColor: surface,
      borderRadius: 16,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 5,
    },
    header: { marginBottom: 24, alignItems: "center" },
    title: { fontSize: baseFont * 1.75, fontWeight: "bold", color: text },
    subtitle: { fontSize: baseFont, color: textSec, marginTop: 8 },
    button: {
      backgroundColor: BRAND.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 24,
    },
    buttonText: { color: "#ffffff", fontSize: baseFont * 1.1, fontWeight: "600" },
    infoRow: { flexDirection: "row", justifyContent: "space-between", width: "100%", gap: 12 },
    infoBox: {
      flex: 1,
      backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    infoText: { fontSize: baseFont * 0.85, color: textSec, fontWeight: "500" },
  });
};

export default function Index() {
  const { width, height, fontScale } = useWindowDimensions();
  const systemColorScheme = useColorScheme();
  
  // 1. State Management: Start with NULL to indicate "Follow System"
  const [appTheme, setAppTheme] = useState<"light" | "dark" | null>(null);

  // 2. Determine Effective Theme: If appTheme is null, use system
  const effectiveIsDark = appTheme === "dark" || (appTheme === null && systemColorScheme === "dark");

  // 3. Optimized Styles: Only recalculate when dimensions or theme change
  const styles = useMemo(() => 
    getStyles(width, fontScale, effectiveIsDark), 
    [width, fontScale, effectiveIsDark]
  );

  // 4. Toggle Logic: Cycles Light -> Dark -> System
  const toggleAppTheme = () => {
    if (appTheme === null) setAppTheme("light");
    else if (appTheme === "light") setAppTheme("dark");
    else setAppTheme(null); // Back to System
  };

  const getThemeLabel = () => {
    if (appTheme === null) return "System";
    return appTheme === "dark" ? "Dark" : "Light";
  };

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };

  return (
    <View style={styles.container}>
      <StatusBar style={effectiveIsDark ? "light-content" : "dark-content"} />

      {/* Responsive Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Brand UI</Text>
          <Text style={styles.subtitle}>Adaptive Design System</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        {/* Debug/Info Section */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{Math.round(width)}w</Text>
          </View>
          
          {/* Theme Toggle Button */}
          <Pressable style={styles.infoBox} onPress={toggleAppTheme}>
            <Text style={[styles.infoText, { fontWeight: 'bold' }]}>
              {getThemeLabel()}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Orientation Controls */}
      <View style={{ flexDirection: "row", gap: 12, marginTop: 30 }}>
        <Pressable onPress={lockPortrait} style={[styles.infoBox, { flex: 0, minWidth: 120 }]}>
          <Text style={styles.infoText}>Portrait</Text>
        </Pressable>
        <Pressable onPress={lockLandscape} style={[styles.infoBox, { flex: 0, minWidth: 120 }]}>
          <Text style={styles.infoText}>Landscape</Text>
        </Pressable>
      </View>

      {/* Detailed Status Text */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ color: effectiveIsDark ? "#94a3b8" : "#64748b", fontSize: 12 }}>
          App: {getThemeLabel()} | System: {systemColorScheme === 'dark' ? "Dark" : "Light"}
        </Text>
      </View>
    </View>
  );
}