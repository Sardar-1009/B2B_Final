
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Home: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Welcome to Clothing Marketplace
      </Typography>
      <Typography variant="body1" paragraph>
        Discover a wide range of clothing from various sellers. Browse, buy, or sell your own products!
      </Typography>
      {user ? (
        <Button variant="contained" component={Link} to="/products">
          View Products
        </Button>
      ) : (
        <Button variant="contained" component={Link} to="/login">
          Get Started
        </Button>
      )}
    </Container>
  );
};

export default Home;
