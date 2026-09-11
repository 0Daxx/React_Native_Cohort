import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { BRAND, useScreenMetrics } from "@/theme/theme";

// import { BRAND, useScreenMetrics } from '@/theme';

type NoteProp = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const index = () => {
  // 1. State for Theme Toggling
  const [isDark, setIsDark] = useState(useColorScheme() === "dark");

  // 2. Get Metrics for Responsive Design
  const { width, fontScale, isTablet } = useScreenMetrics();

  // 3. Dynamic Styles Factory
  const styles = useMemo(
    () => getStyles(width, fontScale, isDark),
    [width, fontScale, isDark],
  );

  // Mock Data
  const [notes] = useState<NoteProp[]>([
    {
      id: 1,
      title: "Project Ideas",
      date: "Sep 10",
      content: "Build a react native app with green theme.",
    },
    {
      id: 2,
      title: "Grocery List",
      date: "Sep 09",
      content: "Apples, Bananas, Milk, Bread.",
    },
    {
      id: 3,
      title: "Meeting Notes",
      date: "Sep 08",
      content: "Discuss Q4 goals and marketing strategy.",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredNotes = useMemo(() => {
    if (!searchQuery) return notes;
    const lowerQuery = searchQuery.toLowerCase();
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(lowerQuery) ||
        n.content.toLowerCase().includes(lowerQuery),
    );
  }, [notes, searchQuery]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const renderItem = useCallback(
    ({ item }: { item: NoteProp }) => (
      <Pressable style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
          <Text style={styles.cardPreview} numberOfLines={2}>
            {item.content}
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={isDark ? BRAND.primaryDark : BRAND.primary}
        />
      </Pressable>
    ),
    [isDark],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Notes</Text>
        <Pressable onPress={toggleTheme} style={styles.themeBtn}>
          <Ionicons
            name={isDark ? "sunny" : "moon"}
            size={24}
            color={isDark ? BRAND.textDark : BRAND.text}
          />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color={isDark ? BRAND.textSecondaryDark : BRAND.textSecondary}
          style={{ marginRight: 8 }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={
            isDark ? BRAND.textSecondaryDark : BRAND.textSecondary
          }
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <Pressable hitSlop={20} onPress={() => setSearchQuery("")}>
            <Ionicons
              name="close-circle"
              size={30}
              color={isDark ? BRAND.textSecondaryDark : BRAND.textSecondary}
            />
          </Pressable>
        )}
      </View>

      {/* List */}
      <FlatList
        data={filteredNotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No notes found</Text>
          </View>
        }
      />

      {/* FAB */}
      <Pressable style={styles.fab}>
        <Ionicons name="add" size={30} color="#FFF" />
      </Pressable>
    </SafeAreaView>
  );
};

// --- Dynamic Style Factory ---
const getStyles = (width: number, fontScale: number, isDark: boolean) => {
  const bg = isDark ? BRAND.backgroundDark : BRAND.background;
  const surface = isDark ? BRAND.surfaceDark : BRAND.surface;
  const text = isDark ? BRAND.textDark : BRAND.text;
  const textSec = isDark ? BRAND.textSecondaryDark : BRAND.textSecondary;
  const border = isDark ? BRAND.borderDark : BRAND.border;
  const primary = isDark ? BRAND.primaryDark : BRAND.primary;

  const isTablet = width >= 768;
  const padding = isTablet ? 30 : 16;
  const baseFont = 16 * fontScale;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: padding,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: border,
    },
    headerTitle: {
      fontSize: baseFont * 1.5,
      fontWeight: "bold",
      color: text,
    },
    themeBtn: {
      padding: 8,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: surface,
      margin: padding,
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: border,
    },
    searchInput: {
      flex: 1,
      fontSize: baseFont,
      color: text,
    },
    listContent: {
      paddingBottom: 100,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: surface,
      marginHorizontal: padding,
      marginBottom: 12,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: border,
    },
    cardContent: {
      flex: 1,
      marginRight: 12,
    },
    cardTitle: {
      fontSize: baseFont * 1.1,
      fontWeight: "600",
      color: text,
      marginBottom: 4,
    },
    cardDate: {
      fontSize: baseFont * 0.8,
      color: textSec,
      marginBottom: 6,
    },
    cardPreview: {
      fontSize: baseFont * 0.9,
      color: textSec,
      lineHeight: baseFont * 1.4,
    },
    emptyState: {
      alignItems: "center",
      marginTop: 50,
    },
    emptyText: {
      color: textSec,
      fontSize: baseFont,
    },
    fab: {
      position: "absolute",
      bottom: 30,
      right: 30,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: primary,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });
};

export default index;
