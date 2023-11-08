import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { AccentText, HomeTitle } from 'components/HomeTitle/HomeTitle.styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <CenterWrapper>
      <HomeTitle>
        Welcome to <AccentText>ContactBook</AccentText> - your digital address
        book. Contact management made easy.
      </HomeTitle>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/register"
      >
        Start manage contacts
      </Button>
    </CenterWrapper>
  );
};

export default Home;
