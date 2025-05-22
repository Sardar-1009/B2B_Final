
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import ProductForm from '../components/ProductForm';
import { getProducts, updateProduct } from '../api/products';
import { Product } from '../types';
import { useProductStore } from '../store/productStore';

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { fetchProducts } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleSubmit = async (updatedProduct: Omit<Product, 'id'>) => {
    if (id) {
      await updateProduct(id, updatedProduct);
      fetchProducts();
      navigate('/products');
    }
  };

  if (loading) return <CircularProgress />;
  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Edit Product
      </Typography>
      <ProductForm product={product} onSubmit={handleSubmit} />
    </Container>
  );
};

export default ProductEdit;
