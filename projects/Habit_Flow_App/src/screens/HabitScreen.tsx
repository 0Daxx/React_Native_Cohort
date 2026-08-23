import "../../global.css";
// @ts-nocheck

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  Button,
  Modal,
  TextInput,
  ScrollView,
  Switch,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { Ionicons } from "@react-native-vector-icons/ionicons";

import HabitProps from "../lib/habits/types";

const HabitItem = ({ habit }: { habit: HabitProps }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [logValue, setLogValue] = React.useState<number>(0);

  // habit detail modal
  const [detailModalVisible, setDetailModalVisible] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable
        // navigate to habit details screen
        onPress={() => {
          console.log(habit);
        }}
        onLongPress={() => {
          // show habit details modal
          setDetailModalVisible(true);
          console.log(habit);
        }}
        // onPress={() => console.log(habit)}
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
          <Text style={{ color: "white" }}>
            {" "}
            {habit.current} / {habit.goal} {habit.unit}{" "}
          </Text>
          {/* <Text style={{ color: "white" }}>  {habit.description}  </Text> */}
        </View>
        <Pressable
          style={{ marginLeft: "auto" }}
          onPress={() => {
            // Handle habit completion logic here
            console.log(`Habit ${habit.title} completed!`);
            setModalVisible(true);
          }}
        >
          <Text className="text-white font-bold text-lg"> Log </Text>
          <Ionicons name="checkmark-circle" size={24} color="white" />
        </Pressable>

        {/* Pop-up Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Log Progress</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Value"
                  placeholderTextColor="#666"
                  value={logValue}
                  onChangeText={setLogValue}
                  keyboardType="numeric"
                />
                <Text style={styles.unitText}>km</Text>
              </View>

              <Text style={styles.timeText}>Today, 03:22 pm</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={{ color: "#007AFF" }}>CANCEL</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    habit.current += logValue;
                    // setHabits(habits.map(h => h.id === habit.id ? { ...h, current: h.current + logValue } : h));
                    // setHabits
                    setModalVisible(false);
                  }}
                >
                  <Text style={{ color: "#007AFF" }}>SAVE</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/* Habit Detail Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={detailModalVisible}
          onRequestClose={() => setDetailModalVisible(false)}
        >
          {/* Modal Content */}

          {/* skip , fail , log progress , edit  || , add note , start timer  */}

          <Pressable
            style={
              (styles.modalOverlay,
              { borderRadius: 10, padding: 10, width: "20%", height: "45%" , justifyContent : 'space-between' , backgroundColor: "#222" , borderRadius: 10 , padding: 10 , position: "absolute" , left: "10%" , top: "20%"})
            }
            onPress={() => setDetailModalVisible(false)}
          >
            <FlatList
              data={[
                { label: "Skip", onPress: () => console.log("Skip") },
                { label: "Fail", onPress: () => console.log("Fail") },
                {
                  label: "Log Progress",
                  onPress: () => console.log("Log Progress"),
                },
                { label: "Edit", onPress: () => console.log("Edit") },
                // { label: "Add Note", onPress: () => console.log("Add Note") },
                // {label: "Start Timer", onPress: () => console.log("Start Timer"),},
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    item.onPress();
                    setDetailModalVisible(false);
                  }}
                  style={{
                    padding: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: "#444",
                  }}
                >
                  <Text style={{ color: "white" }}>{item.label}</Text>
                </Pressable>
              )}
            />
            <Pressable onPress={() => setDetailModalVisible(false)}>
              <Text style={{ color: "#007AFF" }}>CLOSE</Text>
            </Pressable>
          </Pressable>

          {/* <View style={styles.modalOverlay}> */}
            {/* <View style={styles.modalContent}> */}
              {/* <Text style={styles.modalTitle}>Habit Details</Text> */}
              {/* <Text style={styles.modalDescription}>{habit.description}</Text> */}
              {/* <Pressable onPress={() => setDetailModalVisible(false)}>
                <Text style={{ color: "#007AFF" }}>CLOSE</Text>
              </Pressable> */}
            {/* </View>
          </View> */}
        </Modal>
      </Pressable>
      {/* // habit log button */}
    </View>
  );
};

export const DayItem = ({
  day,
  handleDayPress,
  selectDay,
}: {
  day: number;
  handleDayPress: (day: number) => void;
  selectDay: number | null;
}) => {
  return (
    <Pressable
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        // backgroundColor: "#333",
        backgroundColor: selectDay === day ? "#007AFF" : "#333",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        // position at bottom of the screen
        // position: "absolute",
        // bottom: 10,
      }}
      key={day}
      onPress={() => {
        // focus on day
        handleDayPress(day);
        console.log(day);
      }}
      // focus on day
    >
      <Text style={{ color: "white" }}>{day}</Text>
    </Pressable>
  );
};

//
export default function HabitScreen() {
  const [selectDay, setSelectedDay] = React.useState<number | null>(12);
  const listRef = React.useRef(null);
  const handleDayPress = (day: number) => {
    // Handle day selection logic here
    console.log(`Day ${day} selected!`);
    setSelectedDay(day);

    listRef.current?.scrollToIndex({
      index: day,
      // index: day - 1,
      animated: true,
      viewPosition: 0.65, //
    });
  };

  // const listRef = React.useRef<FlatList>(null);

  const [Habits, setHabits] = React.useState<HabitProps[]>([
    {
      id: 1,
      title: "Drink Water",
      description: "Drink 8 glasses of water daily",
      icon: "water",
      color: "#00BFFF",
      goal: 8,
      frequency: "daily",
      current: 0,
      unit: "glasses",
    },
    {
      id: 2,
      title: "Exercise",
      description: "Exercise for 30 minutes daily",
      icon: "fitness",
      color: "#FF4500",
      goal: 30,
      frequency: "daily",
      current: 0,
      unit: "minutes",
    },
    {
      id: 3,
      title: "Read",
      description: "Read for 30 minutes daily",
      icon: "book",
      color: "#008672",
      goal: 30,
      frequency: "daily",
      current: 0,
      unit: "minutes",
    },
    // },
    {
      id: 4,
      title: "Code 1 hour",
      description: "Code for 1 hour daily",
      icon: "code",
      color: "#000c7d",
      goal: 60,
      frequency: "daily",
      current: 0,
      unit: "minutes",
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

      {/* footer  */}

      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {/* days   */}
        <FlatList
          // style={{ marginTop: 10 }}
          horizontal
          ref={listRef}
          handleDayPress={handleDayPress}
          showsHorizontalScrollIndicator={false}
          data={Array.from({ length: 30 }, (_, i) => i + 1)}
          renderItem={({ item }) => (
            <DayItem
              day={item}
              handleDayPress={handleDayPress}
              selectDay={selectDay}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />

        {/* Add Habit Button */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#7e7e7e",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() =>
            setHabits([
              ...Habits,
              {
                id: Habits.length + 1,
                title: "New Habit",
                description: "New Habit",
                icon: "fitness",
                color: "#FF4500",
              },
            ])
          }
        >
          <Ionicons name="add" size={24} color="black" />
          <Text>Add Habit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  logButton: { backgroundColor: "#333", padding: 10, borderRadius: 5 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // This dims the HabitScreen background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#222", // Dark card theme matching your screenshot
    borderRadius: 12,
    padding: 20,
  },
  // ... add your styling for inputs and layout here
});
