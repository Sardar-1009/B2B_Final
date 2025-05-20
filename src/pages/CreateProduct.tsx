import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import api from '../services/api';

interface ProductForm {
  name: string;
  price: number;
  description: string;
  categoryId: number;
}

const CreateProduct: React.FC = () => {
  const [form, setForm] = useState<ProductForm>({ name: '', price: 0, description: '', categoryId: 0 });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'price' || name === 'categoryId' ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/products', form);
      navigate('/products');
    } catch (error) {
      console.error('Product creation failed', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5">Создать товар</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Название"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="price"
          label="Цена"
          type="number"
          value={form.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Описание"
          value={form.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="categoryId"
          label="ID категории"
          type="number"
          value={form.categoryId}
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

export default CreateProduct;