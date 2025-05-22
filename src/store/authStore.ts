import { create } from 'zustand';
import { auth } from '../api/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../api/auth';
import { UserRole } from '../types';

interface AuthState {
  user: User | null;
  role: UserRole['role'];
  loading: boolean;
  setUser: (user: User | null, role?: UserRole['role']) => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: 'user',
  loading: true,
  setUser: (user, role = 'user') => set({ user, role, loading: false }),
  initializeAuth: () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const role = userDoc.exists() ? (userDoc.data() as UserRole).role : 'user';
        set({ user, role, loading: false });
      } else {
        set({ user: null, role: 'user', loading: false });
      }
    });
  },
}));