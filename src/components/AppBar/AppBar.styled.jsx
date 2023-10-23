import { AppBar, Container, Toolbar } from '@mui/material';
import { Logo } from 'components/Logo/Logo';

export const Header = ({ children }) => {
  return (
    <AppBar
      position="static"
      sx={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'revert',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', gap: '40px' }}>
        <Logo />
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'revert',
            justifyContent: 'space-between',
          }}
        >
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
