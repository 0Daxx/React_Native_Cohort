import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  useColorScheme,
  Switch,
  Platform,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

interface NoteCardProps {
  date: string;
  tags: string[];
  preview: string;
  note: string;
  title: string;
  id: string;
}

export default function TabTwoScreen() {
  const [notesList, setNotesList] = useState<NoteCardProps[]>([
    {
      title: "Note sas 1",
      note: "noice , this is a note 1 okay",
      date: "2023-07-01",
      tags: ["tag1", "tag2"],
      preview: "Preview 1",
      id: "1",
    },
    {
      title: "Note 2",
      note: "noice , this is a note 2",
      date: "2023-07-02",
      tags: ["tag3", "tag4"],
      preview: "Preview 2",
      id: "2",
    },
  ]);
  const [title, setTitle] = React.useState<string | undefined>("");
  const [note, setNote] = React.useState<string>(
    "noice this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note  ",
  );
  const theme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  // Dynamic style mappings for dark/light variations
  const dynamicContainer = {
    backgroundColor: isDarkMode ? "#121212" : "#ffffff",
  };
  const dynamicTextColor = { color: isDarkMode ? "#ffffff" : "#000000" };
  const dynamicInputBg = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5",
  };

  // every re render of this component will cause the entire screen to re-render, which is not ideal for performance. Consider using React.memo or useCallback for optimization if needed.

  return (
    <SafeAreaView style={{ ...dynamicContainer, flex: 1 }}>
      {/* @ts-ignore */}
      <ImageBackground 
          source={require("../../assets/images/bg2.jpg")}
          // source={require("../assets/images/bg2.jpg")}
        style={{ position: "absolute", width: "100%", height: "40%" }}
          imageStyle={{ opacity: 0.6 }}

        />
      <Pressable
        style={{
          borderRadius: 10,
          width: 40,
          height: 40,
          backgroundColor: isDarkMode ? "#333333" : "#f0f0f0",
          alignSelf: "flex-end",
          marginRight: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setIsDarkMode(!isDarkMode)}
      >
        <Ionicons
          name={(isDarkMode && "sunny-outline") || "moon-outline"}
          color={isDarkMode ? "#fffb00" : "#000000"}
          size={30}
        />
      </Pressable>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={[{ fontSize: 14, opacity: 0.9 }, dynamicTextColor]}>
            {note.trim().split(/\s+/).filter(Boolean).length} words
          </Text>

          <TextInput
            placeholder="Title"
            placeholderTextColor="gray"
            value={title}
            onChangeText={setTitle}
            style={[
              {
                height: 50,
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 5,
              },
              dynamicTextColor,
            ]}
          />

          <Text style={[{ fontSize: 14, marginTop: 5, color: "#007AFF" }]}>
            {notesList[0].tags.map((tag: string) => `#${tag} `)}
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "gray",
            opacity: 0.3,
            marginBottom: 15,
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TextInput
            placeholder="enter note"
            placeholderTextColor="gray"
            value={note}
            multiline={true}
            onChangeText={setNote}
            style={[
              {
                flex: 1,
                fontSize: 16,
                textAlignVertical: "top",
                padding: 15,
                borderRadius: 10,
              },
              dynamicTextColor,
              dynamicInputBg,
            ]}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
