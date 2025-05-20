import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useUserStore } from '../store/userStore';
import api from '../services/api';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, [user, navigate]);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Товары</Typography>
      {products.length === 0 ? (
        <Typography>Товары отсутствуют</Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;