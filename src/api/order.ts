import { db } from '@api/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Product } from '../types';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  userId: string;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

export const createOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...order,
    createdAt: new Date().toISOString(),
  });
  return { id: docRef.id, ...order };
};