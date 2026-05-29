import { Ionicons } from "@expo/vector-icons";
import { useColorScheme, useSafeAreaEnv } from "nativewind";
import { useState } from "react";
import {
  Appearance,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
// import { setColorScheme } from "react-native/types_generated/Libraries/Utilities/Appearance";
export default function NoteEditorScreen() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  //   const [isDarkMode,setIsDarkMode] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-zinc-950" : "bg-white"}`}
    >
      <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      // style={styles.container}
      >
        <View className="flex-row items-center">
          <Pressable
            onPress={() => {}}
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center justify-center shadow-sm active:scale-95 transition-all"
          >
            <Ionicons name="arrow-back" size={20} color="#4f46e5" />
          </Pressable>

          <Pressable
            onPress={() => {
              isDarkMode
                ? Appearance.setColorScheme("light")
                : Appearance.setColorScheme("dark");
            }}
            className="w-full text-6xl text-white p-2 flex-row"
          >
            <Ionicons
              name={isDarkMode ? "moon" : "sunny"}
              color={isDarkMode ? "white" : "black"}
              size={40}
            />
          </Pressable>
        </View>
        <View className={`flex-1 ${isDarkMode ? "bg-zinc-950" : "bg-white"}`}>
          {/* <Text className="text-red-400 text-6xl">note editor</Text> */}

          <TextInput
            className="w-full text-lg text-zinc-900 dark:text-white font-semibold border border-slate-200 dark:border-zinc-800 rounded-xl p-3 mb-3 "
            placeholder="Note Title"
            placeholderTextColor="#94a3b8" // Sleek, modern slate placeholder
            value={title}
            onChangeText={(text) => setTitle(text)}
            // style={{
            //   color: "#c92323ff",
            //   width: "80%",
            //   fontSize: 24,
            //   height: "60",
            //   //   minHeight: "20%",
            // }}
          />

          <TextInput
            className="w-full text-base text-zinc-800 dark:text-red-200 border border-slate-200 dark:border-white  dark:text-red-800 rounded-xl p-4 min-h-[200px]"
            placeholder="Start writing your note..."
            value={note}
            onChangeText={(text) => setNote(text)}
            placeholderTextColor="#cbd5e1"
            style={{
              fontSize: 18,
              textAlignVertical: "top",
              color: "#008afbff",
              height: "90%",
            }}
            multiline
            numberOfLines={15}
          />

          {/* Header */}
          <View
            className={`flex-row justify-between items-center px-6 pt-6 pb-4 ${
              isDarkMode ? "bg-zinc-950" : "bg-white"
            }`}
          ></View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/*
bun run android , keeps crashing when writing wrong nativeCSS , exit Code 7 


cuz i did git init first , branch name is default master , will Change it to main 


*/
