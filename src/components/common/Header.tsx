import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { userSignOut } from '../../api/auth';



const Header: React.FC = () => {
  const { user, role, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await userSignOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Clothing Marketplace
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/products">
              All Products
            </Button>
            <Button color="inherit" component={Link} to="/my-products">
              My Products
            </Button>
            <Button color="inherit" component={Link} to="/products/create">
              Create Product
            </Button>
            {role === 'admin' && (
              <Button color="inherit" component={Link} to="/categories/create">
                Create Category
              </Button>
            )}
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;