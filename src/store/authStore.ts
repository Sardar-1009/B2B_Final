import { create } from 'zustand';
import { auth } from '../api/auth';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  initializeAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));