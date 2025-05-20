import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import api from '../services/api';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const response = await api.get('/cart');
      setCartItems(response.data);
    };
    fetchCart();
  }, []);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5">Ваша корзина</Typography>
      {cartItems.map((item) => (
        <div key={item.id} style={{ display: 'flex', margin: '10px 0' }}>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
          <div style={{ marginLeft: '10px' }}>
            <Typography>{item.name}</Typography>
            <Typography>{item.price}$</Typography>
            <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
              <RemoveIcon />
            </IconButton>
            <Typography component="span">{item.quantity}</Typography>
            <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      ))}
      <Typography>Товары ({cartItems.length})</Typography>
      <Typography>Общая стоимость: {total}$</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate('/checkout')}
        style={{ marginTop: '20px' }}
      >
        Перейти к оформлению
      </Button>
    </div>
  );
};

export default Cart;