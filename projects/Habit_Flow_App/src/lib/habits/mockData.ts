import React from "react";

interface HabitProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  goal?: number;
  current?: number;
  frequency?: "daily" | "weekly" | "monthly";
  // reminderTime?: string;
  // reminder?: boolean;
  streakCount?: number;
  unit?:
    | "times"
    | "kilometers"
    | "minutes"
    | "hours"
    | "pages"
    | "words"
    | unknown;
}

export const [Habits, setHabits]: [HabitProps[], React.Dispatch<React.SetStateAction<HabitProps[]>>] = React.useState<HabitProps[]>([
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


// data for each day the month days 1-30 for each habit 
export const [Days, setDays]: [number[], React.Dispatch<React.SetStateAction<number[]>>] = React.useState<number[]>(Array.from({ length: 30 }, (_, i) => i + 1));

