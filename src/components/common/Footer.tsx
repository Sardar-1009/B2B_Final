import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white', mt: 'auto' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Clothing Marketplace. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;