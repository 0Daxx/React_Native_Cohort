import { create } from "zustand";
import { supabase } from "../lib/supabase";

import type { Session, User } from "@supabase/supabase-js";
import { featureFlags } from "react-native-screens";

interface AuthStore {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;

  // initialize: () => Promise<void>;
  initialize: () => () => void;
  handleDeepLink: (url: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  session: null,
  user: null,
  isLoading: true,
  isInitialized: false,

  initialize() {
    if (get().isInitialized) {
      // returns an empty object
      return () => {};
    }
    set({ isInitialized: true });

    supabase.auth.getSession().then(({ data: { session } }) => {
      set({
        session,
        user: session?.user ?? null,
        isLoading: false,
      });
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session,
        user: session?.user ?? null,
        isLoading: false,
      });
    });

    return ()=>subscription.unsubscribe()
  },


  handleDeepLink : async (url)=> {
    // todo
    },
  signOut: async()=> {
    const {error} = await supabase.auth.signOut();
    if (error) throw error ;
    },
}));
