import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useProductStore } from '../store/productStore';
import ProductCard from '../components/ProductCard';
import { getUserProducts } from '../api/products';
import { useAuthStore } from '../store/authStore';
import { Product } from '../types/index';

const ITEMS_PER_PAGE = 10;

const MyProducts: React.FC = () => {
  const { user } = useAuthStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!user) return;
    const fetchMyProducts = async () => {
      setLoading(true);
      const userProducts = await getUserProducts(user.uid);
      setProducts(userProducts);
      setLoading(false);
    };
    fetchMyProducts();
  }, [user]);

  const paginatedProducts = products.slice(0, page * ITEMS_PER_PAGE);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Products
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'flex-start',
            }}
          >
            {paginatedProducts.map((product) => (
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
          {products.length > paginatedProducts.length && (
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => setPage(page + 1)}
            >
              Load More
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default MyProducts;