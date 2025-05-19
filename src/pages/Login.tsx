import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { useUserStore } from '../store/userStore';
import api from '../services/api';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', form);
      setUser(response.data.user);
      navigate('/products');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Войти</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Почта"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Пароль"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Войти
        </Button>
      </form>
      <div>
        <Button onClick={() => navigate('/signup')}>Создать аккаунт</Button>
      </div>
    </div>
  );
};

export default Login;