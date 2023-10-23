import { Button } from '@mui/material';

export const ButtonOutlined = ({
  children,
  component = 'button',
  pathTo,
  onClick,
}) => {
  return (
    <Button
      component={component}
      to={pathTo}
      variant="outlined"
      color="secondary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const ButtonContained = ({
  children,
  component = 'button',
  pathTo,
  onClick,
}) => {
  return (
    <Button
      component={component}
      to={pathTo}
      variant="contained"
      color="secondary"
      sx={{
        boxShadow: 'none',
        '&.MuiButtonBase-root:hover': {
          boxShadow: 'none',
          bgcolor: '#ffffff',
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
