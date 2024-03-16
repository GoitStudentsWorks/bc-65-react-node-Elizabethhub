import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Container, Main } from './Layout.styled.js';
import { BackgraundContainer } from './BackgraundContainerStyled.js';

const Layout = () => {
  return (
    <>
      <BackgraundContainer />
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

export default Layout;
