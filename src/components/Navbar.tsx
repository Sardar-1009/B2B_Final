import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import { useUserStore } from '../store/userStore';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <BottomNavigationAction label="Меню" icon={<HomeIcon />} onClick={() => navigate('/products')} />
      <BottomNavigationAction label="Поиск" icon={<SearchIcon />} onClick={() => navigate('/products')} />
      <BottomNavigationAction label="Корзина" icon={<ShoppingCartIcon />} onClick={() => navigate('/cart')} />
      <BottomNavigationAction label="Мои товары" icon={<StoreIcon />} onClick={() => navigate('/products')} />
      <BottomNavigationAction
        label="Мой профиль"
        icon={<PersonIcon />}
        onClick={() => navigate(user ? '/profile' : '/login')}
      />
    </BottomNavigation>
  );
};

export default Navbar;