import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Добро пожаловать!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/login')}
        style={{ marginTop: '20px', marginRight: '10px' }}
      >
        Войти
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate('/signup')}
        style={{ marginTop: '20px' }}
      >
        Создать аккаунт
      </Button>
    </div>
  );
};

export default Welcome;