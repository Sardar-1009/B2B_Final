import { db } from '../api/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export interface Category {
  id: string;
  name: string;
}

export const createCategory = async (name: string): Promise<Category> => {
  const docRef = await addDoc(collection(db, 'categories'), { name });
  return { id: docRef.id, name };
};

export const getCategories = async (): Promise<Category[]> => {
  const querySnapshot = await getDocs(collection(db, 'categories'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
};