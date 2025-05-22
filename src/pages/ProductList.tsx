import { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useProductStore } from '../store/productStore';
import ProductCard from '../components/ProductCard';

const ProductList: React.FC = () => {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-start',
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                flex: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' },
                maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' },
              }}
            >
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default ProductList;