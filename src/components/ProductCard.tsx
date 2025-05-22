import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { deleteProduct } from '../api/products';
import { useProductStore } from '../store/productStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { fetchProducts } = useProductStore();

  const handleDelete = async () => {
    await deleteProduct(product.id);
    fetchProducts();
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body2">Category: {product.category}</Typography>
        <Button onClick={() => navigate(`/products/edit/${product.id}`)}>
          Edit
        </Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;