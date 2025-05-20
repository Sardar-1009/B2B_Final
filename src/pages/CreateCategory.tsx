import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import api from '../services/api';

interface CategoryForm {
  name: string;
}

const CreateCategory: React.FC = () => {
  const [form, setForm] = useState<CategoryForm>({ name: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/categories', form);
      navigate('/products');
    } catch (error) {
      console.error('Category creation failed', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5">Создать категорию</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Название категории"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Создать
        </Button>
      </form>
    </div>
  );
};

export default CreateCategory;