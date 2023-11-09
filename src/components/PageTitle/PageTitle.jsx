import { Typography } from '@mui/material';

export const PageTitle = ({ children }) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{ fontWeight: 600, marginBottom: '20px' }}
    >
      {children}
    </Typography>
  );
};
