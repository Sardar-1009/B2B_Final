export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  userId: string;
}

export interface UserRole {
  role: 'user' | 'admin';
}