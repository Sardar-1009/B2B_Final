import { useCartStore } from '@store/cartStore';
import { useAuthStore } from '@store/authStore';
import { createOrder } from '@api/orders';
import { Box, Typography, Button, TextField, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      await createOrder({
        userId: user.uid,
        items: cart,
        total,
      });
      clearCart();
      navigate('/products');
      alert('Order placed successfully!');
    } catch (error) {
      alert('Failed to place order');
    }
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        <Typography>Your cart is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.map((item) => (
        <Box key={item.product.id} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              style={{ width: 100, height: 100, objectFit: 'cover' }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{item.product.name}</Typography>
              <Typography>Price: ${item.product.price}</Typography>
              <TextField
                type="number"
                label="Quantity"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                inputProps={{ min: 1 }}
                sx={{ width: 100, mt: 1 }}
              />
            </Box>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remove
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleCheckout}
        disabled={!user}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;