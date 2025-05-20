import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/products/${product.id}`)}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.price}$</Typography>
        <Typography variant="body2">{product.name || 'Супер крутое худи'}</Typography>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;