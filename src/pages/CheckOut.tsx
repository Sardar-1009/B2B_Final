import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField } from '@mui/material';

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/products');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5">Как оплатить заказ?</Typography>
      <TextField label="Способ оплаты" value="Карта" fullWidth margin="normal" disabled />
      <Typography>Итого</Typography>
      <Typography>1 товар на сумму: 100$</Typography>
      <Typography>Моя скидка: 0</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit}
        style={{ marginTop: '20px' }}
      >
        Заказать
      </Button>
    </div>
  );
};

export default Checkout;