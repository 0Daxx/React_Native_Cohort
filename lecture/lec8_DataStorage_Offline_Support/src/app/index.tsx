import { Text, View, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {useState} from "react";
export default function Index() {
  const [data, setData] = useState<string | null>(null);

  // set item 
  const setItems = async ( key : string ,  value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }
  const getItems = async (key : string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        setData(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  const removeItem = async (key : string ) => {
    try {
      const value = await AsyncStorage.removeItem(key)
    } catch (error) {
      
    }
  }

  const clearAll = async () =>{
    try {
      const value = await AsyncStorage.clear()
    } catch (error) {
      
    }
  }

  const saveMulti  = async () => {
    try {
      
    } catch (error) {
      
    }
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
