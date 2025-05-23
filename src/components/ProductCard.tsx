import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          component={Link}
          to={`/products/edit/${product.id}`}
          size="small"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;