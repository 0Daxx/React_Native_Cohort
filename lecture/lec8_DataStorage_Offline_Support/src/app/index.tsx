import { Text, View, StyleSheet, ScrollView, Button , Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export function Index2() {
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
    setOutput("object saved ");
  };
  const getObject = async () => {
    const userData = await SecureStore.getItemAsync("user");
    setOutput(userData ? JSON.parse(userData) : "object not found");
  };

  return <View></View>;
}

const db = SQLite.openDatabaseSync("mydb.db");

export function Index3() {
  const [output, setOutput] = useState<string>("");
  // create table
  const createTable = () => {
    db.execAsync(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER);",
    );
    setOutput("Table created successfully");
  };

  // insert
  const insertData = () => {
    db.runSync("INSERT INTO users (name, age) VALUES (?, ?);", [
      "John Doe",
      30,
    ]);
    setOutput("Data inserted successfully");
  };

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

// File system
import { File, Directory, Paths } from "expo-file-system";

export default function Index() {
  const [output, setOutput] = useState<string>("");


  // download file URI 
  const [fileUri, setFileUri] = useState<string>("");
  // write file
  const demoFile = new File(Paths.document, "demo.txt");
  const secFile = new File(Paths.document, "file2.txt");
  const moveFileDemo = new File(Paths.document, "moveFile.txt");

  const writeFile = async () => {
    demoFile.write("okay");
    setOutput("File written successfully");
  };
  const readFile = async () => {
    const data = await demoFile.text();
    setOutput( "File content:" +  data );

  };

  const appendFile = async () => {
    const OldData = await demoFile.text();
    demoFile.write(OldData + "\n New data ");
    setOutput("File appended successfully" + "\n New data " + OldData );
  };

  const copyFile = async () => {
    demoFile.copy(secFile);
    setOutput("File copied successfully");
  };

  // move
  const moveFile = async () => {
    secFile.copy(moveFileDemo);
    setOutput("File moved successfully");
  };
  // delete
  const deleteAllFile = async () => {
    demoFile.delete();
    secFile.delete();
    moveFileDemo.delete();
    setOutput("All files deleted");
  };

  const getFileInfo = async () => {
    const info = demoFile.info();
    const info2 = {
      exists: demoFile.exists,
      size: demoFile.size,
      lastModified: demoFile.lastModified,
      uri: demoFile.uri,
      name: demoFile.name,
    };
    setOutput("File Info: " + JSON.stringify(info2));
  };

  // Create directory
  const dir = new Directory(Paths.document, "notesDir");

  const createDirectory = async () => {
    dir.create();
    setOutput("Directory created");
  };
  const deleteDirectory = async () => {
    dir.delete();
    setOutput("Directory deleted");
  };
  const getDirectoryInfo = async () => {
    const info = dir.info();
    setOutput(JSON.stringify(info));
  };
  const getDirectoryContents = async () => {
    const contents = dir.list();
    setOutput(JSON.stringify(contents));
  };

  // Download file from url
  const downloadFile = async () => {
    const folder = new Directory(Paths.document, "downloads");
    // folder.create();

    const downlaodedFile = await File.downloadFileAsync(
      "https://picsum.photos/200/500",
      folder,
    );

    setOutput("File downloaded to: " + downlaodedFile.uri);
    setFileUri(downlaodedFile.uri);
  };

  const chooseFile = async () => {
    const file = await File.pickFileAsync(); 
    // display the image selected 

    // step 1 : check if file is not null 
    const folder = new Directory(Paths.document, "downloads");

    if (file) {
      setOutput("File chosen: " + file);
      setFileUri(file);
    } else {
      setOutput("No file chosen");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      {/*  */}
      <ScrollView>
        <Button title="write file" onPress={writeFile} />
        <Button title="read file" onPress={readFile} />
        <Button title="append file" onPress={appendFile} />
        <Button title="copy file" onPress={copyFile} />
        <Button title="move file" onPress={moveFile} />
        <Button title="delete file" onPress={deleteAllFile} />
        <Button title="get file info" onPress={getFileInfo} />
        <Button title="create directory" onPress={createDirectory} />
        <Button title="delete directory" onPress={deleteDirectory} />
        <Button title="get directory info" onPress={getDirectoryInfo} />
        <Button title="get directory contents" onPress={getDirectoryContents} />
        <Button title="download file" onPress={downloadFile} />

        <Button title="choose file" onPress={chooseFile} />
      </ScrollView>
      <View style={{ marginTop: 20, padding: 10, backgroundColor: "#f0f0f0" , borderRadius: 10 , width: "90%" , alignItems: "center" , justifyContent: "center" }}>


        {
          fileUri ? 
          <Image source={{ uri: fileUri }} style={{ width: 200, height: 200 , marginBottom: 10}} />
          : null
        }
        <Text>OUTPUT</Text>
        <Text>  {output}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
