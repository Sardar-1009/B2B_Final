import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import api from '../services/api';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h6">{product.price}$</Typography>
      <Typography variant="h5">{product.name || 'Супер крутое худи'}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <div>
        <Typography>Состав</Typography>
        <Typography>100% хлопок</Typography>
        <Typography>Цвет</Typography>
        <Typography>Болотно-зеленый</Typography>
        <Typography>Состояние</Typography>
        <Typography>Новый</Typography>
        <Typography>Доставка</Typography>
        <Typography>Самовывоз</Typography>
      </div>
      <div>
        <Typography>Размер</Typography>
        <Button variant="outlined">XS</Button>
        <Button variant="outlined">S</Button>
        <Button variant="contained">M</Button>
        <Button variant="outlined">L</Button>
        <Button variant="outlined">XL</Button>
        <Button variant="outlined">XXL</Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        style={{ marginTop: '20px' }}
      >
        В корзину
      </Button>
    </div>
  );
};

export default ProductDetail;