
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 3, mt: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Clothing Marketplace. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
