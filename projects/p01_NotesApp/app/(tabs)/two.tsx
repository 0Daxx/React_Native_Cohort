import { Text, TextInput, View, KeyboardAvoidingView, useColorScheme, Switch } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
// import { KeyboardAvoidingView } from "react-native/types_generated/index";

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
  const [title, setTitle] = React.useState<string | unknown>();
  const [note, setNote] = React.useState<string>(
    "noice this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note , this is a note  ",
  );
  const theme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  return (
    // @ts-ignore
    <SafeAreaView>
      {/* @ts-ignore */}

      <Pressable
        style={{
          borderColor: "gray",
          // borderWidth: 1,
          borderRadius: 10,
          width: "60",
          height: 60,
          backgroundColor: isDarkMode ? null : "#f0f0f0",
          padding: 10,
          alignSelf: "flex-end",
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
        }}
      onPress={() => setIsDarkMode(!isDarkMode)}>
        {
          isDarkMode ? (
            <Ionicons name="sunny-outline" color="#fffb00" size={40} 
            style={{ 
              position: "absolute",
               top: 10, right: 10 }}

             />
          ) : (
            <Ionicons name="moon-outline" color="#000000" size={40} style={{ position: "absolute", top: 10, right: 10 }} />
          )
        }

        {/*@ts-ignore */}
      </Pressable>


      <View>
        {/*@ts-ignore */}

        <View>
          {/*@ts-ignore */}
          <Text style={{ color: "#ffff" }}>
            {" "}
            {note.trim().split(/\s+/).length} words{" "}
          </Text>
          {/* <Text style={{ color: "#ffff" }} > { notesList[0].note.trim().split(/\s+/).length } words </Text> */}

          {/*@ts-ignore */}
          <TextInput
            // placeholder="Enter title"
            placeholder= { "Title "   }  
            placeholderTextColor="gray"
            value={title}
            onChangeText={setTitle}
            style={{
              height: 40,
              borderColor: "gray",
              color: "#ffff",
              fontSize: 20,
            }}
          />
          {/*@ts-ignore */}
          <Text style={{ color: "#ffff" }}>
            {" "}
            {notesList[0].tags.map((tag: string) => `#${tag}`)}{" "}
          </Text>
          {/*@ts-ignore */}
          <Text style={{ color: "gray", fontSize: 12, marginLeft: 10 }}></Text>
        </View>
        {/*@ts-ignore */}
        <View style={{ height: 1, backgroundColor: "gray" }}></View>
        {/*@ts-ignore */}

        <KeyboardAvoidingView
          behavior="padding"
          style={{
            width: "99%",
            height: "95%",
          }}
        >
          {/*@ts-ignore */}
          <TextInput
            placeholder="enter note"
            value={note}
            multiline={true}
            onChangeText={setNote}
            style={{
              borderColor: "gray",
              color: "#ffff",
              fontSize: 16,
              textAlignVertical: "top",
              backgroundColor: "#101010",
              width: "99%",
              height: "95%",
              padding: 10,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}