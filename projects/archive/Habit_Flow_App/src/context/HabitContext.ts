import React, { createContext, useState, ReactNode, useContext } from "react";
import HabitProps from "../lib/habits/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InitialHabitsData, { setHabits } from "../lib/habits/mockData";

const HABITS_STORAGE_KEY = "habits_data";
// const HabitContext = createContext<undefined | HabitContextType>(undefined);

interface HabitContextType {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
}

const HabitContext = createContext<HabitContextType | undefined>(undefined);

interface HabitProviderProps {
  children: ReactNode;
}

export const HabitProvider = ({ children }: HabitProviderProps) => {
  const [habits, setHabits] = useState<HabitProps[]>(InitialHabitsData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load habits from AsyncStorage when the component mounts
  React.useEffect(() => {
    const loadHabits = async () => {
      try {
        const storedHabits = await AsyncStorage.getItem(HABITS_STORAGE_KEY);
        if (storedHabits) {
          setHabits(JSON.parse(storedHabits));
        }
      } catch (error) {
        console.error("Failed to load habits from storage:", error);
        setError("Failed to load habits from storage");
      } finally {
        setLoading(false);
      }
    };
    loadHabits();
  }, []);

  // Save habits to AsyncStorage whenever they change
  React.useEffect(() => {
    const saveHabits = async () => {
      try {
        await AsyncStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
      } catch (error) {
        const defaultData = InitialHabitsData;
        await AsyncStorage.setItem(
          HABITS_STORAGE_KEY,
          JSON.stringify(defaultData),
        );
        setHabits(defaultData);
        // console.error("Failed to save habits to storage:", error);
      } finally {
        setLoading(false);
      }
    };
    saveHabits();
  }, [habits]);
};

const logProgress = async (habitId: number, value: number) => {
  const dayKey = `habit_${habitId}_day_${new Date().toISOString().split("T")[0]}`;
  try {
    const storedValue = await AsyncStorage.getItem(dayKey);
    const newValue = storedValue ? parseInt(storedValue) + value : value;
    await AsyncStorage.setItem(dayKey, newValue.toString());
  } catch (error) {
    console.error("Failed to log progress:", error);
  }
  setHabits((prevHabits) =>
    prevHabits.map((habit) =>
      habit.id === habitId
        ? { ...habit, current: (habit.current || 0) + value }
        : habit,
    ),
  );
};

export const useHabits = () => useContext(HabitContext);
// export default HabitContext;
