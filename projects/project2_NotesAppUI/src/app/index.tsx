import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

type NoteProp = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const NotesItem = ({ note }: { note: NoteProp }) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{note.title}</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>{note.date}</Text>
        <Text style={{ fontSize: 14, color: "gray" }} numberOfLines={2}>
          {note.content}{" "}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </Pressable>
  );
};

const index = () => {
  // notes list
  const [notes, setNotes] = React.useState<NoteProp[]>([
    {
      id: 1,
      title: "Note 1",
      date: "2023-06-01",
      content: "This is the content of note 1.",
    },
    {
      id: 2,
      title: "Note 2",
      date: "2023-06-02",
      content: "This is the content of note 2.",
    },
    {
      id: 3,
      title: "Note 3",
      date: "2023-06-03",
      content: "This is the content of note 3.",
    },
    {
      id: 4,
      title: "Note 4",
      date: "2023-06-04",
      content: "hello this was a test.",
    },
  ]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  // filtered notes list

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* search  */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // padding: 10,
          backgroundColor: "lightgray",
          // hitSlop: {top: 10, bottom: 10, left: 10, right: 10}
        }}
      >
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          style={{
            flex: 1,
            // marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            color: "black",
            backgroundColor: "pink",
          }}
          placeholder="Search in Notes"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Ionicons name="close" size={24} color="black" />
      </Pressable>

      {/* add note  */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          borderBottomWidth: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          // backgroundColor: "black",
          borderBottomColor: "lightgray",
          // borderTopWidth: 1,
          borderRadius: 10,
        }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}

        onPress={() => { console.log("add note pressed"); }}
      >
        <View>
          {/* <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add Note</Text> */}
        </View>
        <Ionicons name="add" size={24} color="black" />
      </Pressable>

      <FlatList
        data={filteredNotes}
        renderItem={({ item }) => <NotesItem note={item} />}
      ></FlatList>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
