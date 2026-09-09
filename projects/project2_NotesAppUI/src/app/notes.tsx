import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type NotesProp = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const Notes = () => {
  const [notes, setNotes] = useState<NotesProp>({
    id: 1,
    title: "Note 1",
    date: "2023-06-01",
    content:
      "This is the content of note 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });

  const [isFocused, setIsFocused] = useState<"title" | "content" | null>(null);
  const titleRef = useRef<TextInput>(null);
  const contentRef = useRef<TextInput>(null);

  const handleFocus = (field: "title" | "content") => {
    setIsFocused(field);
  };

  const handleBlur = () => {
    setIsFocused(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Brand Header Bar */}
      <View style={styles.brandBar} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {/* Editable Title */}
          <View
            style={[
              styles.fieldContainer,
              isFocused === "title" && styles.focusedField,
            ]}
          >
            <TextInput
              ref={titleRef}
              style={[
                styles.titleInput,
                isFocused === "title" && styles.focusedTitle,
              ]}
              value={notes.title}
              onChangeText={(text) => setNotes({ ...notes, title: text })}
              onFocus={() => handleFocus("title")}
              onBlur={handleBlur}
              placeholder="Untitled Note"
              placeholderTextColor="#CCCCCC"
              selectionColor="#00C853"
            />
            {isFocused === "title" && <View style={styles.focusIndicator} />}
          </View>

          {/* Word Count  */}
          <View style={styles.footer}>
            <Text style={styles.wordCount}>
              {notes.content.split(/\s+/).filter((w) => w.length > 0).length}{" "}
              words
            </Text>
          </View>
          {/* Date Badge */}
          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>{notes.date}</Text>
          </View>

          {/* Editable Content */}
          <View
            style={[
              styles.fieldContainer,
              styles.contentWrapper,
              isFocused === "content" && styles.focusedField,
            ]}
          >
            <TextInput
              ref={contentRef}
              style={[
                styles.contentInput,
                isFocused === "content" && styles.focusedContent,
              ]}
              value={notes.content}
              onChangeText={(text) => setNotes({ ...notes, content: text })}
              onFocus={() => handleFocus("content")}
              onBlur={handleBlur}
              multiline
              textAlignVertical="top"
              placeholder="Write your thoughts here..."
              placeholderTextColor="#CCCCCC"
              selectionColor="#00C853"
            />
            {isFocused === "content" && (
              <View style={styles.focusIndicatorContent} />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  brandBar: {
    height: 4,
    backgroundColor: "#03a547",
  },
  scrollView: {
    flex: 1,
  },
  dateBadge: {
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
  },
  dateText: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "500",
  },
  fieldContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    position: "relative",
  },
  contentWrapper: {
    flex: 1,
    minHeight: 400,
  },
  focusedField: {
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
  },
  titleInput: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    padding: 0,
    paddingBottom: 8,
  },
  focusedTitle: {
    color: "#03a547",
  },
  contentInput: {
    fontSize: 16,
    lineHeight: 26,
    color: "#333333",
    minHeight: 300,
    padding: 0,
    paddingTop: 8,
  },
  focusedContent: {
    color: "#000000",
  },
  focusIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#03a547",
  },
  focusIndicatorContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 3,
    height: "100%",
    backgroundColor: "#03a547",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    marginTop: 24,
  },
  wordCount: {
    fontSize: 12,
    color: "#999999",
    textAlign: "right",
  },
});

export default Notes;
