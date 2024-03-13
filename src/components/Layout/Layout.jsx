import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Container } from './Layout.styled.js';
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
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
