import { create } from 'zustand';
import { Product } from '../types';
import { getProducts } from '../api/products';

interface ProductState {
  products: Product[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    const products = await getProducts();
    set({ products, loading: false });
  },
}));