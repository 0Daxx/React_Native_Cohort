//@ts-nocheck

import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { Ionicons } from "@react-native-vector-icons/ionicons";


//  temp habit list

interface HabitProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const HabitItem = ({ habit }: { habit: HabitProps }) => {
  return (
    <Pressable
      onPress={() => console.log(habit)}
      key={habit.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        backgroundColor: habit.color,
        borderRadius: 10,
      }}
    >
      <Ionicons name={habit.icon} size={24} color="white" />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {habit.title}
        </Text>
        <Text style={{ color: "white" }}>{habit.description}</Text>
      </View>
    </Pressable>
  );
};


export default function HabitScreen() {

  const [Habits, setHabits] = React.useState<HabitProps[]>([
    {
      id: 1,
      title: "Drink Water",
      description: "Drink 8 glasses of water daily",
      icon: "water",
      color: "#00BFFF",
    },
    {
      id: 2,
      title: "Exercise",
      description: "Exercise for 30 minutes daily",
      icon: "fitness",
      color: "#FF4500",
    },
    {
      id: 3,
      title: "Read",
      description: "Read for 30 minutes daily",
      icon: "book",
      color: "#008672",
    },
    // },
    {
      id: 4,
      title: "Code 1 hour",
      description: "Code for 1 hour daily",
      icon: "code",
      color: "#000c7d",
    },
  ]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar style="auto" />

      {Habits.length === 0 && (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            No habits found
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Add a habit to get started
          </Text>
        </View>
      )}

      {/* Habit List */}
      <FlatList
        data={Habits}
        renderItem={({ item }) => <HabitItem habit={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
