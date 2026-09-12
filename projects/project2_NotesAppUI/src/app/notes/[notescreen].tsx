import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { BRAND, useScreenMetrics } from "@/theme/theme";
import { usePathname } from "expo-router";
import { useNotesStore } from "@/store/notesStore";
const notescreen = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [isDark, setIsDark] = useState(false);
  const { width, fontScale } = useScreenMetrics();

  const notes = useNotesStore((state) => state.notes);
  const updateNote = useNotesStore((state) => state.updateNote);

  const styles = useMemo(
    () => getStyles(width, fontScale, isDark),
    [width, fontScale, isDark],
  );

  const noteId = useMemo(() => (id ? parseInt(id) : null), [id]);
  const note = useMemo(
    () => notes.find((n) => n.id === noteId),
    [notes, noteId],
  );

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note?.id]);

  const handleTitleChange = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
      if (note && !isNaN(note.id)) {
        updateNote(note.id, { title: newTitle });
      }
    },
    [note, noteId, updateNote],
  );

  const handleContentChange = useCallback(
    (newContent: string) => {
      setContent(newContent);
      if (note && !isNaN(note.id)) {
        updateNote(note.id, { content: newContent });
      }
    },
    [note, noteId, updateNote],
  );

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

      <Text style={styles.dateLabel}>{note?.date}</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, ...styles.scrollContent }}
      >
        <TextInput
          onChangeText={handleTitleChange}
          style={styles.titleInput}
          value={title}
          multiline
          textAlignVertical="top"
          placeholder="Title"
          placeholderTextColor={
            isDark ? BRAND.textSecondaryDark : BRAND.textSecondary
          }
        />

        <TextInput
          style={styles.contentInput}
          value={content}
          onChangeText={handleContentChange}
          multiline
          textAlignVertical="top"
          placeholder="Start typing..."
          placeholderTextColor={
            isDark ? BRAND.textSecondaryDark : BRAND.textSecondary
          }
        />
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

export default notescreen;
