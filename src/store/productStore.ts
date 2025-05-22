import { create } from 'zustand';
import { Product } from '../types';
import { getProducts } from '../api/products';

interface ProductState {
  products: Product[];
  loading: boolean;
  lastFetched: number | null;
  fetchProducts: () => Promise<void>;
}

const CACHE_DURATION = 5 * 60 * 1000; 

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  lastFetched: null,
  fetchProducts: async () => {
    const { lastFetched, products } = get();
    if (lastFetched && Date.now() - lastFetched < CACHE_DURATION && products.length > 0) {
      return; 
    }
    set({ loading: true });
    const fetchedProducts = await getProducts();
    set({ products: fetchedProducts, loading: false, lastFetched: Date.now() });
  },
}));