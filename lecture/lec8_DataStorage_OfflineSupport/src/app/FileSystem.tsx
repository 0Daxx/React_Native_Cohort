import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { File, Paths, Directory } from 'expo-file-system'
import * as  DocumentPicker from 'expo-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const FileSystem = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [imageUri, setImageUri] = useState<string | null>("https://picsum.photos/200/300");
  const demoDirectory = new Directory(Paths.document, "demo");
  const demoFile = new File(Paths.document, "demo.txt");


  const writeFile = async () => {
    try {
      demoFile.write("Hello World");
      setOutput("File written successfully");
    } catch (error) {
      console.error("Error writing file:", error);
      setOutput("Error writing file");
    }
  };
  const readFile = async () => {
    try {
      demoFile.textSync();
      setOutput("File read successfully");
    } catch (error) {
      console.error("Error reading file:", error);
      setOutput("Error reading file");
    }
  };
  const append = async () => {
    try {
      const currentContent = demoFile.textSync();
      demoFile.write(currentContent + "\nHello World");
      setOutput("File written successfully");
    } catch (error) {
      console.error("Error writing file:", error);
      setOutput("Error writing file");
    }
  };
  const deleteFile = async () => {
    try {
      demoFile.delete();
      setOutput("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file:", error);
      setOutput("Error deleting file");
    }
  };

  const copiedFile = async () => {
    try {
      const copiedFile = new File(Paths.document, "copied.txt");
      demoFile.copy(copiedFile);
      setOutput("File copied successfully");
    } catch (error) {
      console.error("Error copying file:", error);
      setOutput("Error copying file");
    }
  };

  const moveFile = async () => {
    try {
      const movedFile = new File(Paths.document, "moved.txt");
      demoFile.move(movedFile);
      setOutput("File moved successfully");
    } catch (error) {
      console.error("Error moving file:", error);
      setOutput("Error moving file");
    }
  };

  const createDirectory = async () => {
    try {
      demoDirectory.create();
      setOutput("Directory created successfully");
    } catch (error) {
      console.error("Error creating directory:", error);
      setOutput("Error creating directory");
    }
  };

  const downloadFile = async () => {
    const folder = new Directory(Paths.cache, "downloads");
    // check if folder exists, if not create it
    if (!folder.exists) {
      folder.create();
    }
    // folder.create();
    const downloadableFile = await File.downloadFileAsync("https://picsum.photos/200", folder);

    console.log("downloadedFile:", downloadableFile);
    console.log("uri:", downloadableFile.uri);
    console.log("bytes :", downloadableFile.bytes);
    setImageUri(downloadableFile.uri);
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: "center",
      //  justifyContent: "center"
    }}>
      <Text>FileSystem</Text>

      <FlatList data={[
        { id: "1", title: "Write File", onPress: writeFile },
        { id: "2", title: "Read File", onPress: readFile },
        { id: "3", title: "Append File", onPress: append },
        { id: "4", title: "Delete File", onPress: deleteFile },
        { id: "5", title: "Copy File", onPress: copiedFile },
        { id: "6", title: "Move File", onPress: moveFile },
        { id: "7", title: "Download File", onPress: downloadFile },
        { id: "8", title: "Create Directory", onPress: createDirectory }
      ]} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.title} onPress={item.onPress}>
          </Button>
        )}
      />
      <View style={{ marginTop: 20, borderWidth: 1, borderColor: "black", padding: 10, width: "80%", alignItems: "center" }}>
        <Text>Output: {output} </Text>
        {/* <Text>file : {demoFile.textSync()}</Text> */}
      </View>
      {imageUri &&
        <Image source={{ uri: (imageUri) }} style={{ width: 200, height: 300 }} />
      }

      {/* task : pick file pdf or text and display its content */}
      <Button title='Pick File' onPress={async () => {

        try {
          const result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: true,
            type: ["application/pdf", "text/plain"]
          });
          if (!result.canceled) {
            const { uri: fileUri } = result.assets[0];

            const file = new File(fileUri);
            const fileName = result.assets[0].name;
            const fileType = result.assets[0].mimeType;
            setOutput(`Picked file: ${fileName} (${fileType})`);
            console.log("Picked file:", fileUri);
            console.log("File data \n\n\n ", file.textSync());
          } else {
            setOutput("File picking canceled");
          }
        } catch (error) {
          console.error("Error picking file:", error);
          setOutput("Error picking file");
        }
        // const file = new File(Paths.document, "appFile.txt");
      }} />

    </SafeAreaView>
  )
}

export default FileSystem

const styles = StyleSheet.create({})