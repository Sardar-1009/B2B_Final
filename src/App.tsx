import React, { type JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Products from './pages/Products';
import Welcome from './pages/WelcomPage';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/CheckOut';
import CreateProduct from './pages/CreateProduct';
import CreateCategory from './pages/CreateCategory';
import Navbar from './components/Navbar';
import { useUserStore } from './store/userStore';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const user = useUserStore((state) => state.user);
  return user ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
        //   path="/products"
        //   element={
        //     <ProtectedRoute>
        //       <Products />
        //     </ProtectedRoute>
        //   }
        // />
        // <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-product"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-category"
          element={
            <ProtectedRoute>
              <CreateCategory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;