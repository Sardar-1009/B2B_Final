import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));