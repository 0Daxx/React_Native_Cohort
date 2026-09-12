import { create } from 'zustand';

export type NoteProp = {
  id: number;
  title: string;
  date: string;
  content: string;
};

interface NotesStore {
  notes: NoteProp[];
  setNotes: (notes: NoteProp[]) => void;
  updateNote: (id: number, updates: Partial<NoteProp>) => void;
}

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [
    {
      id: 1,
      title: "Project Ideas",
      date: "Sep 10",
      content: "Build a react native app with green theme.",
    },
    {
      id: 2,
      title: "Grocery List",
      date: "Sep 09",
      content: "Apples, Bananas, Milk, Bread.",
    },
    {
      id: 3,
      title: "Meeting Notes",
      date: "Sep 08",
      content: "Discuss Q4 goals and marketing strategy.",
    },
  ],
  setNotes: (notes) => set({ notes }),
  updateNote: (id, updates) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, ...updates } : note
      ),
    })),
}));