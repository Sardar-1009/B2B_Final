import { db } from '../api/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Product } from '../types';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string; 
  userId: string;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

export const createOrder = async (
  order: Omit<Order, 'id' | 'createdAt'>
): Promise<Order> => {
  const orderWithDate = {
    ...order,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, 'orders'), orderWithDate);
  return {
    id: docRef.id,
    ...orderWithDate,
  };
};