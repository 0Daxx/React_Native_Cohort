import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  // ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { BRAND, useScreenMetrics } from "@/theme/theme";

const notes = () => {
  const [isDark, setIsDark] = useState(false);
  const { width, fontScale } = useScreenMetrics();

  // Generate styles dynamically
  const styles = useMemo(
    () => getStyles(width, fontScale, isDark),
    [width, fontScale, isDark],
  );

  const [note, setNote] = useState({
    title: "Project Ideas",
    date: "Sep 10, 2026",
    content:
      "Build a react native app with green theme.\n\nFeatures:\n- Dark mode\n- Responsive design\n- Simple styling",
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => setIsDark(!isDark)} style={styles.iconBtn}>
          <Ionicons
            name={isDark ? "sunny" : "moon"}
            size={24}
            color={isDark ? BRAND.textDark : BRAND.text}
          />
        </Pressable>
      </View>

      <Text style={styles.dateLabel}>{note.date}</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, ...styles.scrollContent }}
      >
        {/* <ScrollView contentContainerStyle={styles.scrollContent}> */}
        <TextInput
          style={styles.titleInput}
          value={note.title}
          onChangeText={(t) => setNote({ ...note, title: t })}
          placeholder="Title"
          placeholderTextColor={
            isDark ? BRAND.textSecondaryDark : BRAND.textSecondary
          }
        />
        {/* Content Input/Display */}

        <TextInput
          style={styles.contentInput}
          value={note.content}
          onChangeText={(t) => setNote({ ...note, content: t })}
          multiline
          textAlignVertical="top"
          placeholder="Start typing..."
          placeholderTextColor={
            isDark ? BRAND.textSecondaryDark : BRAND.textSecondary
          }
        />

        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// --- Dynamic Style Factory ---
const getStyles = (width: number, fontScale: number, isDark: boolean) => {
  const bg = isDark ? BRAND.backgroundDark : BRAND.background;
  const text = isDark ? BRAND.textDark : BRAND.text;
  const textSec = isDark ? BRAND.textSecondaryDark : BRAND.textSecondary;
  const primary = isDark ? BRAND.primaryDark : BRAND.primary;

  const isTablet = width >= 768;
  const padding = isTablet ? 40 : 20;
  const baseFont = 16 * fontScale;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
    },
    header: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingHorizontal: padding,
      paddingVertical: 16,
    },
    iconBtn: {
      padding: 8,
    },
    saveBtn: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: primary,
    },
    saveText: {
      fontWeight: "600",
      fontSize: baseFont * 0.9,
    },
    scrollContent: {
      padding: padding,
    },
    dateLabel: {
      fontSize: baseFont * 0.8,
      color: textSec,
      marginBottom: 8,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    titleDisplay: {
      fontSize: baseFont * 1.8,
      fontWeight: "bold",
      color: text,
      marginBottom: 20,
    },
    titleInput: {
      fontSize: baseFont * 1.8,
      fontWeight: "bold",
      color: text,
      marginBottom: 20,
      padding: 0,
      borderBottomWidth: 1,
      borderBottomColor: textSec,
    },
    contentDisplay: {
      fontSize: baseFont,
      color: text,
      lineHeight: baseFont * 1.6,
    },
    contentInput: {
      flex: 1,
      fontSize: baseFont,
      color: text,
      lineHeight: baseFont * 1.6,
      minHeight: 300,
      padding: 0,
      textAlignVertical: "top",
    },
  });
};

export default notes;
