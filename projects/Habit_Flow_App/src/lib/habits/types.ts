// habits types
// export type HabitProps = {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
//   goal?: number;
//   frequency?: "daily" | "weekly" | "monthly";
//   reminderTime?: string; // e.g., "08:00 AM"
//   streakCount?: number;
//   reminder?: boolean;
//   unit ?: "times" | "kilometers" | "minutes" | "hours" | "pages" | "words" | "custom" ;
//   // isCompleted?: boolean;
//   // lastCompleted?: Date;
// };

export default interface HabitProps {
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
    | "custom";
}

/*
write in journal : repeat every day/week/month ,  x times per day , reminder time  


Frequency: "daily" | "weekly" | "monthly" | "yearly";
*/