import {
  Pressable,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

interface NoteCardProps {
  date: string;
  tags: string[];
  preview: string;
  note: string;
  title: string;
  id: string;
  isDarkMode: boolean;
}

function NoteComponent({
  date,
  tags,
  preview,
  title,
  isDarkMode,
}: Omit<NoteCardProps, "note" | "id">) {
  const dynamicTextColor = { color: isDarkMode ? "#ffffff" : "#000000" };

  return (
    <Pressable
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: isDarkMode ? 0 : 0.05,
        shadowRadius: 8,
        elevation: isDarkMode ? 0 : 2,
      }}
      onPress={() => console.log("Note pressed")}
    >
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={[{ fontSize: 18, fontWeight: "bold" }, dynamicTextColor]}>
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
          {date}
        </Text>
        <Text style={[{ fontSize: 14, marginTop: 8, opacity: 0.8 }, dynamicTextColor]} numberOfLines={2}>
          {preview}
        </Text>
        <Text style={{ color: "#4F8EF7", fontSize: 13, marginTop: 8, fontWeight: "500" }}>
          {tags.map(tag => `#${tag}`).join(" ")}
        </Text>
      </View>

      <Pressable style={{ padding: 5 }} onPress={() => console.log("Menu pressed")}>
        <Ionicons
          name="ellipsis-horizontal-outline"
          color={isDarkMode ? "#aaaaaa" : "#666666"}
          size={22}
        />
      </Pressable>
    </Pressable>
  );
}

export default function TabOneScreen() {
  const [input, setInput] = useState<string>("");
  const [notesList] = useState<Omit<NoteCardProps, "isDarkMode">[]>([
    {
      title: "Note sas 1",
      note: "noice , this is a note 1",
      date: "2023-07-01",
      tags: ["tag1", "tag2"],
      preview: "Preview 1",
      id: "1",
    },
    {
      title: "Note 2",
      note: "noice , this is a note 2 password ",
      date: "2023-07-02",
      tags: ["tag3", "tag4"],
      preview: "Preview 2",
      id: "2",
    },
  ]);

  const [filteredNotes, setFilteredNotes] = useState(notesList);
  const [inInputFocus, setInInputFocus] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const dynamicTextColor = { color: isDarkMode ? "#ffffff" : "#000000" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? "#121212" : "#ffffff" }}>
      
      {/* Theme Toggle Button Container */}
      <View style={{ height: 50, justifyContent: "center", paddingHorizontal: 20 }}>
        <Pressable
          style={{
            borderRadius: 10,
            width: 40,
            height: 40,
            backgroundColor: isDarkMode ? "#333333" : "#f0f0f0",
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsDarkMode(!isDarkMode)}
        >
          <Ionicons
            name={isDarkMode ? "sunny-outline" : "moon-outline"}
            color={isDarkMode ? "#fffb00" : "#000000"}
            size={24}
          />
        </Pressable>
      </View>

      {/* Search Bar Wrapper Container */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5",
          borderRadius: 12,
          height: 46,
          alignItems: "center",
          paddingHorizontal: 12,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Ionicons name="search-outline" color="gray" size={20} style={{ marginRight: 8 }} />
        
        <TextInput
          value={input}
          onFocus={() => setInInputFocus(true)}
          onBlur={() => setInInputFocus(false)}
          onChangeText={(text: string) => {
            setInput(text);
            setFilteredNotes(
              notesList.filter(
                (note) =>
                  note.title.toLowerCase().includes(text.toLowerCase()) ||
                  note.note.toLowerCase().includes(text.toLowerCase()),
              ),
            );
          }}
          placeholder="Search in notes"
          placeholderTextColor="gray"
          style={[{
            flex: 1,
            height: "100%",
            fontSize: 15,
          }, dynamicTextColor]}
        />
        
        {inInputFocus && input.length > 0 && (
          <Pressable
            onPress={() => {
              setInput("");
              setFilteredNotes(notesList);
            }}
            style={{ padding: 4 }}
          >
            <Ionicons name="close-circle" color="gray" size={18} />
          </Pressable>
        )}
      </View>

      {/* Notes List */}
      <FlatList
        data={filteredNotes}
        contentContainerStyle={{ paddingBottom: 90 }}
        renderItem={({ item }: { item: NoteCardProps }) => (
          <NoteComponent
            date={item.date}
            tags={item.tags}
            preview={item.preview}
            title={item.title}
            isDarkMode={isDarkMode}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Floating Action Button (FAB) */}
      <Pressable
        style={{
          position: "absolute",
          bottom: 30,
          right: 25,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: "#4F8EF7",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#4F8EF7",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 5,
        }}
        onPress={() => console.log("Add note")}
      >
        <Ionicons name="add" color="#ffffff" size={30} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});