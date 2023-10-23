import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { AccentText, PageHeading } from 'components/PageHeading/PageHeading';

const Home = () => {
  return (
    <CenterWrapper>
      <PageHeading>
        Welcome to <AccentText>ContactBook</AccentText> - your digital address
        book. Contact management made easy.
      </PageHeading>
    </CenterWrapper>
  );
};

export default Home;
