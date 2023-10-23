import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const SignInButton = ({ children, pathTo }) => {
  return (
    <Button component={Link} to={pathTo} variant="outlined" color="secondary">
      {children}
    </Button>
  );
};

export const SignUpButton = ({ children, pathTo }) => {
  return (
    <Button
      component={Link}
      to={pathTo}
      variant="contained"
      color="secondary"
      sx={{
        marginLeft: '20px',
        boxShadow: 'none',
        '&.MuiButtonBase-root:hover': {
          boxShadow: 'none',
          bgcolor: '#ffffff',
        },
      }}
    >
      {children}
    </Button>
  );
};
