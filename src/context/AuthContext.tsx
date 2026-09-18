import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      setIsAuth: (isAuth: boolean) => set({ isAuth }),
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
