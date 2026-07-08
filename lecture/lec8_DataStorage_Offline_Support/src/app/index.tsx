import { Text, View, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

import * as SQLite from "expo-sqlite";

export function Index1() {
  const [data, setData] = useState<string | null>(null);

  // set item
  const setItems = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };
  const getItems = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeItem = async (key: string) => {
    try {
      const value = await AsyncStorage.removeItem(key);
    } catch (error) {}
  };

  const clearAll = async () => {
    try {
      const value = await AsyncStorage.clear();
    } catch (error) {}
  };

  const saveMulti = async () => {
    try {
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

export  function Index2() {
  const [output, setOutput] = useState<string>("");

  const saveTokens = async () => {
    await SecureStore.setItemAsync("token", "abscds");
    setOutput("Token saved ");
  };

  const getToken = async () => {
    const value = await SecureStore.getItemAsync("token");
    setOutput(value!);
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("token");
    setOutput("Token deleted ");
  };

  const checkAvailablity = async () => {
    const available = await SecureStore.isAvailableAsync();
    setOutput(available ? "secureStore available on device" : "not available");
  };

  // set OBjbect
  const saveObject = async () => {
    const user = {
      name: "code snippet",
      role: "programmer",
    };
    await SecureStore.setItemAsync("user", JSON.stringify(user));
    setOutput("object saved ")
  };
  const getObject = async () => {
  
    const userData = await SecureStore.getItemAsync("user");
    setOutput(userData ? JSON.parse(userData) : "object not found");
    
  }; 

  return <View></View>;
}


const db = SQLite.openDatabaseSync("mydb.db");

export function Index(){
  const [output, setOutput] = useState<string>("");
  // create table 
  const createTable = () => {
    db.execAsync("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER);");
    setOutput("Table created successfully");
  }

  // insert 
  const insertData = () => {
    db.runSync("INSERT INTO users (name, age) VALUES (?, ?);", ["John Doe", 30]);
    setOutput("Data inserted successfully");
  }
  
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
