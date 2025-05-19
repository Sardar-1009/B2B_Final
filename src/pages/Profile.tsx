import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField } from '@mui/material';
import { useUserStore } from '../store/userStore';

const Profile: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5">{user?.name || 'Астафьев Саша'}</Typography>
      <TextField
        label="Дата рождения"
        value="01/01/1900"
        fullWidth
        margin="normal"
        disabled
      />
      <TextField
        label="Почта"
        value={user?.email || 'kto@email.com'}
        fullWidth
        margin="normal"
        disabled
      />
      <TextField
        label="Телефон"
        value="+996 (KG) (308) 555-0121"
        fullWidth
        margin="normal"
        disabled
      />
      <TextField
        label="Пол"
        value=""
        fullWidth
        margin="normal"
        disabled
      />
    </div>
  );
};

export default Profile;
