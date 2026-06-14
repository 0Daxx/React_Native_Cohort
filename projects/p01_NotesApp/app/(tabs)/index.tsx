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
import { StatusBar } from "expo-status-bar";

// import { Ionicons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";

import { Ionicons } from "@react-native-vector-icons/ionicons";
import { PixelRatio } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";
// import { FlatList}

interface NoteCardProps {
  date: string;
  tags: string[];
  preview: string;
  note: string;
  title: string;
  id: string;
}

function NoteComponent({ note, date, tags, preview, title, id }: NoteCardProps) {
  return (
    <Pressable
      style={{
        margin: 20,
        padding: 10,
        backgroundColor: "#101010",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onPress={() => {
        console.log("Note pressed");
      }}
    >
      <View
        style={{
          flexDirection: "column",
          // borderColor: "gray", borderWidth: 1 ,
          padding: 15,
        }}
      >
        <Text style={{ color: "white" }}>{date}</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffff" }}>
          {title}
        </Text>
        <Text style={{ color: "white" }}>{preview}</Text>
        {/* <Text style={{ color: "white" }}>{note}</Text> */}
        <Text style={{ color: "white" }}>{tags.join(", ")}</Text>

        <Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            color="#434344"
            size={25}
            style={{ position: "absolute", top: 10, right: 10 }}
          />
        </Pressable>
      </View> 
    </Pressable>
  );
}

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const [input, setInput] = useState<string>("");

  // const { height, width } = useWindowDimensions();
  // const insets = useSafeAreaInsets();
  // const isTablet = width >= height;
  // const isLandscape = width >= 768 && width > height;

  const [notesList, setNotesList] = useState<NoteCardProps[]>([
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
      note: "noice , this is a note 2",
      date: "2023-07-02",
      tags: ["tag3", "tag4"],
      preview: "Preview 2",
      id: "2",
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>


    {/* @ts-ignore */}
      <View
        style={{
          flexDirection: "row",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          width: 300,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          alignSelf: "center",
          margin: 10,
          gap: 10,
          width: "80%",
        }}
      >
        <Ionicons name="search-outline" color="#4F8EF7" size={25} />
        <TextInput
          // clearButtonMode="always"
          type="text"
          value={input}
          onChangeText={setInput}
          placeholder="Search in notes"
          placeholderTextColor="gray"
          style={{
            height: 40,
            width: "80%",
            color: "#ffff",
            alignSelf: "center",
            justifyContent: "center",
            // flex:1,
            // alignItems: "center",
            // justifyContent: "center",
          }}
        />
      </View>

      <FlatList
        data={notesList}
        renderItem={({ item }: { item: NoteCardProps }) => (
          <NoteComponent
            note={item.note}
            date={item.date}
            tags={item.tags}
            preview={item.preview}
            title={item.title}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>

      <Pressable backgroundColor="transparent" onPress={() => console.log("Add note")}>
        <Ionicons
          name="add-circle-outline"
          color="#4F8EF7"
          size={50}
          style={{ position: "absolute", bottom: 20, right: 30 }}
        />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 10,
  },
  darkButton: {
    backgroundColor: "#333",
  },
  lightButton: {
    backgroundColor: "#fff",
    color: "#000000",
  },
});
