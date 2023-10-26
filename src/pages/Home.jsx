import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { AccentText, PageHeading } from 'components/HomeTitle/HomeTitle.styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <CenterWrapper>
      <PageHeading>
        Welcome to <AccentText>ContactBook</AccentText> - your digital address
        book. Contact management made easy.
      </PageHeading>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/register"
      >
        Start manage contacts
      </Button>
    </CenterWrapper>
  );
};

export default Home;
