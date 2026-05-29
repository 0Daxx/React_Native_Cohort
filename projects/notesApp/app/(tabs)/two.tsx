import {
  Appearance,
  FlatList,
  Pressable,
  TextInput,
  useColorScheme,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface NoteCardProps {
  id: string;
  preview: string;
  title: string;
  timeStamp: string;
  // isDarkMode: boolean;
}

const NoteCard = ({ title, preview, timeStamp  }: NoteCardProps) => {
  return (
    <Pressable
      className="mx-6 my-2 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform duration-100"
      onPress={() => {}}
    >
      <View className="flex-row items-center justify-between mb-2">
        <Text
          className="text-lg font-bold text-zinc-950 dark:bg-zinc-900  dark:text-zinc-100 flex-1 mr-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color={Appearance.getColorScheme() === 'dark' ? "#71717a" : "#cbd5e1"}
        />
      </View>

      <Text
        className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4"
        numberOfLines={2}
      >
        {preview || "No content summary"}
      </Text>

      <View className="flex-row items-center border-t border-slate-50 dark:border-zinc-800 pt-3 dark:bg-zinc-900  ">
        <Ionicons
          name="calendar-outline"
          size={16}
          color={Appearance.getColorScheme() === 'dark' ? "#71717a" : "#94a3b8"}
        />
        <Text className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 ml-1.5 dark:bg-zinc-900">
          {timeStamp}
        </Text>
      </View>
    </Pressable>
  );
};

export default function TabTwoScreen() {
  const [notesList, setNotesList] = useState<NoteCardProps[]>([
    {
      id: "1",
      title: "Weekly Grocery List",
      preview:
        "Milk, organic eggs, fresh spinach, avocados, whole wheat bread, and some fresh berries.",
      timeStamp: "May 28, 10:30 AM",
    },
    {
      id: "2",
      title: "Project Brainstorming",
      preview:
        "Think about user-flows, interactive micro-animations, clean dark-mode interfaces, and local persistence.",
      timeStamp: "May 27, 4:15 PM",
    },
    {
      id: "3",
      title: "Books to Read",
      preview:
        "Atomic Habits, Designing Design, Clean Code, and Sapiens. Grab copies this weekend.",
      timeStamp: "May 26, 9:00 AM",
    },
    {
      id: "4",
      title: "Gym Workout Plan",
      preview:
        "Monday: Chest & Triceps, Wednesday: Back & Biceps, Friday: Legs & Shoulders. Heavy compound lifts.",
      timeStamp: "May 25, 6:00 PM",
    },
    {
      id: "5",
      title: "Meeting Notes: Design Sync",
      preview:
        "Refining the color theme, establishing card layout grids, and approving the final onboarding flow animations.",
      timeStamp: "May 24, 2:30 PM",
    },
  ]);
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [textInput, setTextInput] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const addNewNote = () => {
    console.log(`pressed`);
    
    const newNote: NoteCardProps = {
      id: (notesList.length + 1).toString(),
      title: "New Note",
      preview: "",
      timeStamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setNotesList([...notesList, newNote]);
  };

  // Filter notes based on search query
  const filteredNotes = notesList.filter(
    (note) =>
      note.title.toLowerCase().includes(textInput.toLowerCase()) ||
      note.preview.toLowerCase().includes(textInput.toLowerCase()),
  );

  return (
    <View
      className={`flex-1 ${isDarkMode ? "bg-zinc-950" : "bg-slate-50"} pb-4`}
    >
      {/* Header Row */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4 w-full">
        <Text className="text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          Notes
        </Text>

        <Pressable
          onPress={() => {
            isDarkMode
              ? Appearance.setColorScheme("light")
              : Appearance.setColorScheme("dark");
            // setIsDarkMode(!isDarkMode);
          }}
          className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center justify-center shadow-sm active:scale-95 transition-all"
        >
          <Ionicons
            name={isDarkMode ? "moon" : "sunny"}
            color={isDarkMode ? "#fbbf24" : "#4f46e5"}
            size={20}
          />
        </Pressable>
      </View>

      {/* Search Input Bar */}
      <View className="flex-row items-center px-4 py-3 mx-6 my-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm">
        <Ionicons
          name="search-outline"
          color={isDarkMode ? "#cbd5e1" : "#64748b"}
          size={20}
        />
        <TextInput
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Search notes..."
          placeholderTextColor="#a1a1aa"
          className="flex-1 text-base text-zinc-800 dark:text-zinc-100 ml-2.5 font-medium"
        />
        {textInput.length > 0 && (
          <Pressable onPress={() => setTextInput("")}>
            <Ionicons name="close-circle" size={25} color="#cbd5e1" />
          </Pressable>
        )}
      </View>

      {/* Notes FlatList */}
      <FlatList
        data={filteredNotes}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            preview={item.preview}
            timeStamp={item.timeStamp}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View className="absolute bottom-6 right-6">
        <Pressable
          onPress={() => addNewNote}
          className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 elevation-5 active:scale-95 transition-transform"
        >
          <Ionicons name="add-outline" size={28} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
