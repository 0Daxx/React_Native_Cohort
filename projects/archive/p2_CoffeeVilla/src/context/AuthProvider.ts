import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isLoggedIn: boolean;
  isInitializing: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isInitializing: true,

  login: async () => {
    await AsyncStorage.setItem('user_session', 'true');
    set({ isLoggedIn: true });
  },

  logout: async () => {
    await AsyncStorage.removeItem('user_session');
    set({ isLoggedIn: false });
  },

  checkAuthStatus: async () => {
    try {
      const session = await AsyncStorage.getItem('user_session');
      set({ isLoggedIn: session === 'true', isInitializing: false });
    } catch {
      set({ isLoggedIn: false, isInitializing: false });
    }
  },
}));
