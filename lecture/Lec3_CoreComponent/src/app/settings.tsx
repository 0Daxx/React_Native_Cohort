import React from "react";
import { ScrollView, Text, View, FlatList } from "react-native";

const ItemBox = () => {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "lightblue",
        borderRadius: 50,
        // width: "20%",
      }}
    >
      <Text style={{ color: "black" }}> Item1 </Text>
      {/* <Text style={{ color: "black" }}> {item} </Text> */}
    </View>
  );
};

interface User {
  id: string;
  name: string;
  role: string;
}

const USERS = [
  { id: "1", name: "John", role: "admin" },
  { id: "2", name: "Jane", role: "user" },
  { id: "3", name: "Bob", role: "user" },
  { id: "4", name: "Alice", role: "admin" },
  { id: "5", name: "Charlie", role: "user" },
  { id: "6", name: "David", role: "user" },
  { id: "7", name: "Eve", role: "admin" },
  { id: "8", name: "Frank", role: "user" },
  { id: "9", name: "Grace", role: "user" },
  { id: "10", name: "Hannah", role: "admin" },
  { id: "11", name: "Ian", role: "user" },
  { id: "12", name: "Jack", role: "user" },
  { id: "13", name: "Karen", role: "admin" },
  { id: "14", name: "Leo", role: "user" },
  { id: "15", name: "Mia", role: "user" },
  { id: "16", name: "Nina", role: "admin" },
  { id: "17", name: "Oscar", role: "user" },
  { id: "18", name: "Paul", role: "user" },
  { id: "19", name: "Quinn", role: "admin" },
];

const UserItem = ({ item }: { item: User }) => {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: "15%",
        borderRadius: 50,
        // height: "20%",
      }}
    >
      <Text style={{ color: "black" }}> {item.name} </Text>
      <Text style={{ color: "black" }}> {item.role} </Text>
    </View>
  );
};

const Settings = () => {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  return (
    <View
      style={{
        flex: 1,
        // flexGrow: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
      contentContainerStyle={{
        // flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Prefer Flatlist over scrollview  */}
      <ScrollView
        horizontal={true}
        style={{
          // flex: 1,
          width: "100%",
          height: "20%",
          backgroundColor: "lightgray",
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          // width: "40%",
          // height: "50%",
        }}
      >
        {items.map((item) => (
          <ItemBox key={item} />
        ))}
      </ScrollView>

      <FlatList
        style={{
          flex: 1,
        }}
        // horizontal={true}
        keyExtractor={(item) => item.id}
        data={USERS}
        renderItem={({ item }) => <UserItem item={item} />}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings</Text>
      </View>
      <Text>Settings</Text>
    </View>
  );
};
export default Settings;
