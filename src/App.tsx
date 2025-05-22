import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductCreate from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';
import { Container } from '@mui/material';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthStore();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/create"
            element={
              <ProtectedRoute>
                <ProductCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <ProtectedRoute>
                <ProductEdit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;