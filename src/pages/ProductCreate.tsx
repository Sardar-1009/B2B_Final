import { Container, Typography } from '@mui/material';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../api/products';
import { useProductStore } from '../store/productStore';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useAuthStore } from '../store/authStore';


const ProductCreate: React.FC = () => {
  const { fetchProducts } = useProductStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (product: Omit<Product, 'id'>) => {
    if (!user) return;
    await createProduct({ ...product, userId: user.uid });
    fetchProducts();
    navigate('/products');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Create Product
      </Typography>
      <ProductForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default ProductCreate;